import Link from "next/link.js";
import logo from "./img/logo.svg"
import styles from '../styles/main.module.css'
import Image from 'next/image'
import {AiFillMessage, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"

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
                <div className={styles.alignCenter}>
                <Link href='/panier'>
                    <span className={styles.spann}><AiOutlineShoppingCart/><span className={styles.inc}>0</span></span>
                </Link>
                </div>
            </nav>
        </header>
    )
}