// import { Link } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Link from './Link';
import styles from './Footer.module.css'

function Footer() {
    return (
        <Box color='primary' className={styles.footer}>
            <p>
                Powered with <span role='img' aria-label='love'>❤️</span> by <Link href="https://madfox.laserflare.net" target="_blank" style={{color: "#73d7ff"}}>MadFox</Link>
                <span> | </span>
                <Link href="https://github.com/XMadFoX/spacex-nextjs" target="_blank">Source code</Link>
            </p>
        </Box>
    )
}

export default Footer;