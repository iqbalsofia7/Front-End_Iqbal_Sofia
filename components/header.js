import Link from "next/link.js";
import logo from "./img/logo.svg"
import styles from '../styles/main.module.css'
import {AiFillHeart} from "react-icons/ai"
import Image from 'next/image'
import {AiFillMessage, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector, useDispatch } from 'react-redux'
import { addUser, setLoggedIn, clearCurrentUser   } from '../Features/counter/counterSlice.js';

export default function Header(props) {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.value)
    const countFav = useSelector((state)=>state.counter.valueFav)
    const loggedIn = useSelector((state)=>state.counter.loggedIn)
    const handleLogout = () => {
        dispatch(setLoggedIn(false));
        dispatch(clearCurrentUser());
    };
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

                { loggedIn == false ? 
                (<div>
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
                </div>) 
                :   
                (<div className={styles.aliCenter}>                    
                    <Link href='/favoris'>
                        <span className={styles.heartF}><AiFillHeart /> <span className={styles.incc}>{countFav}</span></span>
                    </Link> 
                    <div>
                    <button className={styles.loginButtonn} onClick={() => {props.changeLog2; handleLogout()}}>Log Out</button>
                    </div>
                </div>)
                }
            </nav>
        </header>
    )
}
