import Link from "next/link.js";
import logo from "./img/logo.svg"
import styles from '../styles/main.module.css'
import data from '../data.json'
import Image from 'next/image'
export default function Header() {
    return(
        <header>
            <nav className={styles.nav}>
                <Link href='./' >
                    <div>
                        <Image src={logo} className={styles.logoo} />
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