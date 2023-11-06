"use client"
import styles from '../styles/LoginForm.module.css'
import NavBar from "../components/NavBar";
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/navigation'
import LoginForm from '../components/LoginForm'

const Login = () => {
    const [email, setEmail] = useState("admin@gmail.com");
    const [password, setPassword] = useState("password123");
    const [errorMessages, setErrorMessages] = useState('');
    const [user, setUser] = useState({})

    const router = useRouter()
    const { push } = useRouter();


    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        setUser(user)
        if(user){
            push('/')
        }
    }, [])


    const handleSubmit2 = () => {

        console.log('Email: ', email)
        console.log('Password: ', password)

        if(email && password){
            if(password.length >= 6){
                setErrorMessages('')
                // Make a request for a user with a given ID
                axios.get('/json/users.json')
                .then(function (response) {
                    // handle success
                    let emailExists = false;

                    console.log(response.data.users);
                    response.data.users.forEach(user => {
                        // console.log(user)
                        if(!emailExists){
                            if(user.email === email){
                                console.log('Email Exists')
                                emailExists = true
                                if(user.password === password){
                                    setErrorMessages('')
                                    console.log('Logged in!')
                                    localStorage.setItem('user', JSON.stringify(user))
                                    router.push('/')
                                }else{
                                    setErrorMessages('Incorrect Password')
                                }
                            }else{
                                console.log('not equal')
                            }
                        }
                    });
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
            }else{
                console.log('Password length should equal or greater than 6')
                setErrorMessages('Password length should equal or greater than 6')
            }
        }else {
            setErrorMessages('Please fill up all fields!')
            console.log('Please fill up all fields!')
        }
    }

    if(user){
        return <></>
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className={styles['login-card']} style={{marginTop: '48px'}}>
                <h2 style={{textAlign: 'center', fontSize: '32px'}}>Login</h2>
                <div className={styles['login-fields']}>
                    <input className={ errorMessages.length>=1?styles['login-email-invalid']:styles['login-email']} type='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <input className={ errorMessages.length>=1?styles['login-password-invalid']:styles['login-password']} type='password' name='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <p style={{color:'tomato'}}>{errorMessages}</p>
                    <button className={styles['login-btn']} onClick={handleSubmit2}>Login</button>
                </div>
            </div>
        </div>
    );
}
 
export default Login;