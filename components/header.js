import Link from "next/link.js";
import logo from "./img/logo.svg"
import styles from '../styles/main.module.css'
import Image from 'next/image'
import {AiFillMessage, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector, useDispatch } from 'react-redux'
export default function Header(props) {
    const count = useSelector((state)=>state.counter.value)
    return(
        <header>
            <nav className={styles.nav}>
                <Link href='./' >
                    <div>
                        <Image src={logo} className={styles.logoo} />
                    </div>
                </Link>
                <div>
                <Link href='/' >
                    <p className={styles.link}>Search</p>
                </Link>
                    <Link href='./social' >
                        <p className={styles.link}>Social</p>
                    </Link>
                    <p className={styles.link}>Forum</p>
                </div>

                <div>
                    <Link href='/login' >
                        <button className={styles.loginButton} onClick={props.changeLog2}>Login</button>
                    </Link>
                    <Link href='/SignUp' >
                        <button className={styles.signupButton} onClick={props.changeLog}>Sign Up</button>
                    </Link>
                </div>
                <div className={styles.alignCenter}>
                <Link href='/panier'>
                    <span className={styles.spann}><AiOutlineShoppingCart/><span className={styles.inc}>{count}</span></span>
                </Link>
                </div>
            </nav>
        </header>
    )
}