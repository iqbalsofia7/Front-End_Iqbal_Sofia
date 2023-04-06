import Link from "next/link.js";
import logo from "./img/logo.svg"
import styles from '../styles/main.module.css'


export default function Header() {
    return(
        <header>
            <nav className={styles.nav}>
                <Link href='./' >
                    <div>
                    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><title>AniList logo</title><desc>Anime and manga tracking website</desc><path d="M0 0h512v512H0" fill="#1e2630"/><path d="M321.92 323.27V136.6c0-10.698-5.887-16.602-16.558-16.602h-36.433c-10.672 0-16.561 5.904-16.561 16.602v88.651c0 2.497 23.996 14.089 24.623 16.541 18.282 71.61 3.972 128.92-13.359 131.6 28.337 1.405 31.455 15.064 10.348 5.731 3.229-38.209 15.828-38.134 52.049-1.406.31.317 7.427 15.282 7.87 15.282h85.545c10.672 0 16.558-5.9 16.558-16.6v-36.524c0-10.698-5.886-16.602-16.558-16.602z" fill="#02a9ff"/><path d="M170.68 120 74.999 393h74.338l16.192-47.222h80.96L262.315 393h73.968l-95.314-273zm11.776 165.28 23.183-75.629 25.393 75.629z" fill="#fefefe"/></svg>
                    </div>
                </Link>
                <div>
                    <p className={styles.link}>Search</p>
                    <Link href='./social' >
                        <p className={styles.link}>Social</p>
                    </Link>
                    <p className={styles.link}>Forum</p>
                </div>

                <div>
                    <Link href='./login' >
                        <button className={styles.loginButton}>Login</button>
                    </Link>
                    <Link href='./signup' >
                        <button className={styles.signupButton}>Sign Up</button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}