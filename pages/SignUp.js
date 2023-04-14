import React from 'react';
import styles from '../styles/main.module.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, setLoggedIn, clearCurrentUser   } from '../Features/counter/counterSlice.js';
import Head from 'next/head'
import ReCAPTCHA from "react-google-recaptcha";

export default function SignUp(props) {
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
            // const panier = []
            if ( formValues.email.length > 1 && formValues.username.length > 1 && formValues.password.length > 1 && formValues.password == formValues.confirmPassword && check==true && (!captcha != "")) {
                dispatch(setLoggedIn(true));
            }
            if (!formValues.email.includes('@')) {
                setErreurEmail('Veuillez entrer votre email')
            }
            if (formValues.username.length == 0){
                setErreurUsername('Veuiller entrer votre username')
            }
            if (formValues.password.length < 5){
                setErreurPassword('Veuiller entrer un mot de passe (plus de 5 caractères)')
            }
            if (formValues.password != formValues.confirmPassword){
                setErreurPasswordC("Le mot de passe n'est pas le même")
            }
        }
        const [erreurEmail, setErreurEmail] = useState('')
        const [erreurUsername, setErreurUsername] = useState('')
        const [erreurPassword, setErreurPassword] = useState('')
        const [erreurPasswordC, setErreurPasswordC] = useState('')
        const [captcha, setCaptcha] = useState('')
        const captchaValue =(e)=>{
            setCaptcha(e)
        }
    if(loggedIn == false) {
    return (
        <div className={styles.loginPage}>
        <Head>
        <title>Sign Up</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
            <div className={styles.form}>
                <h2>Sign up to AniList</h2>
                <input type='email' placeholder='Email' required name='email' value={formValues.email} onChange={handleInputChange} />
                <p className={styles.redd}> {erreurEmail} </p>

                <input type='text' placeholder='Username' required name='username' value={formValues.username} onChange={handleInputChange} />
                <p className={styles.redd}>{erreurUsername}</p>

                <input type='password' placeholder='Password' required name='password' value={formValues.password} onChange={handleInputChange} />
                <p className={styles.redd}>{erreurPassword}</p>

                <input type='password' placeholder='Confirm Password' required name='confirmPassword' value={formValues.confirmPassword} onChange={handleInputChange} />
                <p className={styles.redd}>{erreurPasswordC}</p>
                
                <div className={styles.grey}>
                <input type='checkbox' checked={check} onClick={toCheck} /><span>You agree to our terms of service</span>
                </div>
                <ReCAPTCHA sitekey="6Lc5HX8lAAAAAIzaVb8JjB-qUe8MyPuWFYn_JlD2" onChange={captchaValue} className={styles.captcha} />
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


