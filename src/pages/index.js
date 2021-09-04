import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '../components/Link';

export default function Index() {
	return (
		<Container maxWidth='md'>
			<Box my={4}>
				<h1>
					A demo project to view some SpaceX things like past launches
				</h1>
				<h2>
					This project uses
				</h2>
				<ul>
					<li>
						<Link href='https://github.com/SpaceXLand/api'>
							<a>SpaceX land</a>
						</Link>{' '}
						GraphQL API to fetch the data (data is outdated)
					</li>
					<li>
						<Link href='https://nextjs.org'>
							<a>Next.js</a>
						</Link>{' '}
						a{' '}
						<Link href='https://reactjs.org/'>
							<a>React</a>
						</Link>{' '}
						framework
					</li>
					<li>
						GraphQL client{' '}
						<Link href='https://www.apollographql.com/docs/react/'>
							<a>Apollo Client</a>
						</Link>
					</li>
					<li>
						<Link href='https://mui.com'>
							<a>Material UI</a>
						</Link>{' '}
						for components
					</li>
					<li>
						A bit of{' '}
						<Link href='https://sass-lang.com/'>
							<a>SCSS</a>
						</Link>{' '}
						and clean CSS
					</li>
				</ul>
			</Box>
		</Container>
	);
}
