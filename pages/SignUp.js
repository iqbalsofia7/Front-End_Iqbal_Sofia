import React from 'react';
import styles from '../styles/main.module.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, setLoggedIn, clearCurrentUser   } from '../Features/counter/counterSlice.js';

function Signup(props) {
    const loggedIn = useSelector((state)=>state.counter.loggedIn)
    const currentUser = useSelector((state) => state.counter.currentUser);
    const dispatch = useDispatch();
    const [check, setCheck] = useState(true)
    const toCheck =()=>{
        setCheck(!check)
    }
    const [formValues, setFormValues] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        });
        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormValues({ ...formValues, [name]: value });
            console.log(value);
        };
        const handleSignup = () => {
            const { email, username, password } = formValues;
            const newUser = { email, username, password };
            dispatch(addUser(newUser));
            if ( formValues.email.length > 1 && formValues.username.length > 1 && formValues.password.length > 1 && formValues.password == formValues.confirmPassword && check==true) {
                   dispatch(setLoggedIn(true));
            } else {
                alert('Merci de remplir tous les champs pour compléter votre inscription')
            }
         
        }
        const handleLogout = () => {
            dispatch(setLoggedIn(false));
            dispatch(clearCurrentUser());
        };
    if(loggedIn == false) {
    return (
        <div className={styles.loginPage}>
            <div className={styles.form}>
                <h2>Sign up to AniList</h2>
                <input type='email' placeholder='Email' required name='email' value={formValues.email} onChange={handleInputChange} />
                <input type='text' placeholder='Username' required name='username' value={formValues.username} onChange={handleInputChange} />
                <input type='password' placeholder='Password' required name='password' value={formValues.password} onChange={handleInputChange} />
                <input type='password' placeholder='Confirm Password' required name='confirmPassword' value={formValues.confirmPassword} onChange={handleInputChange} />
                <div className={styles.grey}>
                <input type='checkbox' checked={check} onClick={toCheck} /><span>You agree to our terms of service</span>
                </div>
                <button onClick={handleSignup}>Sign Up</button>
                <p className={styles.grey2}>Login - Resend Verification Email</p>
            </div>
        </div>
    );
    } 
    if (loggedIn == true) {
        return(
        <div className={styles.loginPage}>
            <h2 className={styles.bienvenue}>Welcome {formValues.username}</h2>
        </div>
        )
    }
}

export default Signup;