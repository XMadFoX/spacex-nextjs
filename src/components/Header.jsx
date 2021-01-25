import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import Image from 'next/image'
import { useRouter } from 'next/router';

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
    const router = useRouter()

	return (
		<div className={classes.root}>
			<AppBar position='static' color='primary'>
				<Toolbar>
                    <Button color='inherit' onClick={() => router.push('/')}>
                        <HomeIcon/>
                        About
                    </Button>
					<Button color='inherit' onClick={() => router.push('/launches')}>
                        <Image src='/images/rocket-13.svg' alt='' height='18px' width='18px'/>
                        <p style={{marginLeft: '0.3em'}}>Launches</p>
                    </Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
