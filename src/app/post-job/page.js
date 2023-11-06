"use client"
import Head from 'next/head'
import NavBar from '../components/NavBar'
import LoginForm from '../components/LoginForm'
import { Inter } from 'next/font/google'
// import styles from '../styles/Login.module.css'  
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })


export default function Users() {


  useEffect( ()=>{
    console.log('run once');
  }, [])

  return (
    <>
      <main className={`${inter.className}`}>
      <NavBar></NavBar>
        <div>Post Job</div>
      </main>
    </>
  )
}
