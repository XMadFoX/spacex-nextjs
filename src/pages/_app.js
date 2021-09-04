import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/theme';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://api.spacex.land/graphql/',
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					launchesPast: {
						// Don't cache separate results based on
						// any of this field's arguments.
						keyArgs: false,
						// Concatenate the incoming list items with
						// the existing list items.
						merge(existing = [], incoming) {
							return [...existing, ...incoming];
						},
					},
				},
			},
		},
	}),
});

export default function MyApp(props) {
	const { Component, pageProps } = props;

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<ApolloProvider client={client}>
				<Head>
					<title>Home</title>
					<meta
						name='viewport'
						content='minimum-scale=1, initial-scale=1, width=device-width'
					/>
				</Head>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Header />
					<Component {...pageProps} />
					<Footer />
				</ThemeProvider>
			</ApolloProvider>
		</React.Fragment>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
