// import { Link } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Link from './Link';
import styles from './Footer.module.scss';

function Footer() {
	return (
		<Box color='primary' className={styles.footer}>
			<p style={{ margin: 'auto' }}>
				Made with{' '}
				<span role='img' aria-label='love'>
					❤️
				</span>{' '}
				by{' '}
				<Link
					href='https://madfox.laserflare.net'
					target='_blank'
					style={{ color: '#73d7ff' }}>
					MadFox
				</Link>
			</p>
		</Box>
	);
}

export default Footer;
