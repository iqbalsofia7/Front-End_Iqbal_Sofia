import React from 'react';
import styles from '../styles/main.module.css'
// import style from '../styles/main.module.css'

function login(props) {
    return (
        <div className={styles.loginPage}>
            <div className={styles.form}>
                <h2>Sign up to AniList</h2>
                <input type='email' placeholder='Email' required />
                <input type='text' placeholder='Username' required />
                <input type='password' placeholder='Password' required />
                <input type='password' placeholder='Confirm Password' required />
                <div className={styles.grey}>
                    <input type='checkbox' /><span>You agree to our terms of service</span>
                </div>
                <button>Sign Up</button>
                <p className={styles.grey2}>Login - Resend Verification Email</p>
            </div>
        </div>
    );
}

export default login;