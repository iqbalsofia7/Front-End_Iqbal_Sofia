import React from 'react';
import Link from "next/link.js";
import styles from '../styles/main.module.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn, setCurrentUser    } from '../Features/counter/counterSlice.js';

function login(props) {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleLogin = () => {
        // Simulate API call to authenticate user
        const users = useSelector((state) => state.counter.users);
        const user = users.find(
            (user) =>
                user.email === formValues.email &&
                user.password === formValues.password
        );
        if (user) {
            dispatch(setLoggedIn(true));
            dispatch(setCurrentUser(user));
        }
    };


    return (
        <div className={styles.loginPage}>
            <div className={styles.form}>
                <h2>Login</h2>
                <input type="email" placeholder="Email" required name="email" value={formValues.email} onChange={handleInputChange} />
                <input type="password" placeholder="Password" required name="password" value={formValues.password} onChange={handleInputChange}/>
                <div className={styles.grey}>
                    <input type='checkbox' /><span>You agree to our terms of service</span>
                </div>
                <button>Login</button>
                <p className={styles.grey2}>Forgot password ?</p>
                <p className={styles.grey2}>Not registered ? <Link href='/SignUp'><span className={styles.blueLink}>Create an account</span></Link></p>
            </div>
        </div>
    );
}

export default login;