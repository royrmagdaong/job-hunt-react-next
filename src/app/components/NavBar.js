"use client"
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

const NavBar = () => {
    const [user, setUser] = useState('')
    const router = useRouter()


    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')))
        console.log('USER', JSON.parse(localStorage.getItem('user')))
    }, [])

    const logout = () => {
        localStorage.removeItem('user')
        setUser('')
        router.push('/login')
    }

    return (
        <div className={styles['nav-container']}>
            <nav className={styles.navbar}>
                <h1 className={styles.title}>Job Hunt</h1>
                <ul className={styles["nav-ul"]}>
                    <li className={styles["search-jobs"]}>
                        <Link href="/">Search jobs</Link>
                    </li>
                    <li className={styles["about"]}>
                        <Link href="/about">About</Link>
                    </li>
                    {
                        user?
                        (user.role==='admin'?
                            <li className={styles["about"]}>
                                <Link href="/users">Users</Link>
                            </li>:''
                        )
                        :''
                    }
                    {
                        user?
                        (user.role==='recruiter'?
                            <li className={styles["about"]}>
                                <Link href="/post-job">Post Job</Link>
                            </li>:''
                        )
                        :''
                    }
                    <li className={styles["login"]}>
                        {
                            user?<a onClick={logout}>Logout</a>:<Link href="/login">Login</Link>
                        }
                    </li>
                    <li className={styles["login"]} style={{marginLeft: '8px', color: 'blue'}}>
                        {
                            user?<>{user.role}</>:''
                        }
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default NavBar;