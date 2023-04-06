import React from 'react';
import Link from "next/link.js";
import styles from '../styles/main.module.css'
// import style from '../styles/main.module.css'

function login(props) {
    return (
        <div className={styles.loginPage}>
            <div className={styles.form}>
                <h2>Login</h2>
                <input type='email' placeholder='Email' required />
                <input type='password' placeholder='Password' required />
                <div className={styles.grey}>
                    <input type='checkbox' /><span>You agree to our terms of service</span>
                </div>
                <button>Login</button>
                <p className={styles.grey2}>Forgot password ?</p>
                <p className={styles.grey2}>Not registered ? <Link href='/signup'><span className={styles.blueLink}>Create an account</span></Link></p>
            </div>
        </div>
    );
}

export default login;