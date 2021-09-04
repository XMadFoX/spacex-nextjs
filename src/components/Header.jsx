import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import GHIcon from '@material-ui/icons/GitHub';
import Image from 'next/image';
import NLink from 'next/link';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Header() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static' color='primary'>
				<Toolbar style={{ display: 'flex' }}>
					<Link color='inherit' href='/' title='About'>
						<HomeIcon style={{ fontSize: '34px' }} />
					</Link>
					<Link href='/launches' title='Launches'>
						<Image
							src='/images/rocket-13.svg'
							alt=''
							height='24px'
							width='24px'
						/>
					</Link>
					<Link
						href='https://github.com/xmadfox/spacex-nextjs'
						title='View on GitHub'
						newTab
						style={{ marginLeft: 'auto' }}>
						<GHIcon style={{ height: '24px' }} />
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
}

const Link = ({ href, children, title, style, newTab }) => (
	<NLink href={href}>
		<a
			target={newTab ? '_blank' : '_self'}
			style={{ color: '#fff', display: 'flex', marginRight: '1rem', ...style }}>
			<span style={{ margin: 'auto' }}>{children}</span>
			<p style={{ margin: 'auto 0.3rem', fontSize: '1.25rem' }}>{title}</p>
		</a>
	</NLink>
);
