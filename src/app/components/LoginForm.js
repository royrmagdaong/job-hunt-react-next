import styles from '../styles/LoginForm.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NavBar = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])
    const [errors, setErrors] = useState([])
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [incorrectPassword, setIncorrectPassword] = useState(false)

    const { push } = useRouter();

    const roles = {
        admin: 'admin',
        applicant: 'applicant',
        recruiter: 'recruiter'
    }


    const login = () => {
        console.log('Email:', email)
        console.log('Password:', password)
        
        users.find(user=>{
            if(user.email === email){
                console.log('Email Exists')
                if(user.password === password){
                    console.log('Password is Correct')
                    setIncorrectPassword(false)
                    setErrors([])

                    console.log('Email:', user.email)
                    console.log('Role:', user.role)

                    // Put the object into storage
                    localStorage.setItem('user', JSON.stringify(user));
                    
                    // Retrieve the object from storage
                    // var retrievedObject = localStorage.getItem('testObject');

                    push('/profile')
                }else{
                    console.log('Incorrect Password')
                    setErrors([...errors, 'Incorrect Password'])
                    setIncorrectPassword(true)
                }
                setIsEmailValid(true)
                return user.email === email
            }else{
                setErrors(['Email is not recognized'])
                setIsEmailValid(false)
                setIncorrectPassword(true)
            }
        })
    }

    const setEmailHandler = (e) => {
        setEmail(e.target.value)
        // console.log(email)
    }

    const setPasswordHandler = (e) => {
        setPassword(e.target.value)  
        // console.log(password)
    }

    useEffect(()=>{
        const fetchUsers = async () => {
            const res = await fetch('/json/users.json')
            const jsonData = await res.json();
            setUsers(jsonData.users);
            console.log('USERS: ',jsonData.users)
        }
        fetchUsers();
        console.log('TEST')
    }, []);

    return (
        <div className={styles['login-card']}>
            <h2 style={{textAlign: 'center', fontSize: '32px'}}>Login</h2>
            <div className={styles['login-fields']}>
                <input className={ isEmailValid?styles['login-email']:styles['login-email-error']} type='email' name='email' placeholder='Email' onChange={setEmailHandler} defaultValue={email} />
                <input className={ incorrectPassword?styles['login-password-error']:styles['login-password']} type='password' name='password' placeholder='' onChange={setPasswordHandler} defaultValue={password}/>
                <button className={styles['login-btn']} onClick={login}>Login</button>
                <div className={styles['error-messages']}>
                    {
                        errors.map((error)=>(
                            <p key={error}>{error}</p>
                        ))
                    }
                </div> 
            </div>
        </div>
    );
}
 
export default NavBar;