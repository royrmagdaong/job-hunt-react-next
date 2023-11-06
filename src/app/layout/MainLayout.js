"use client"
import NavBar from "../components/NavBar";
import Filter from "../components/Filter";
import ListJobs from "../components/ListJobs";
import ViewJob from "../components/ViewJob";
import styles from '../styles/MainLayout.module.css'

import { useState, useEffect } from "react";
import axios from 'axios'
import JobContext from "./JobContext";

const MainLayout = () => {


    // run once
    useEffect(()=>{
        console.log('run once!')
    }, [])

    return ( 
        <div>
            <NavBar></NavBar>
            <Filter></Filter>
                
            <div className={styles['main-content']}>
                <ListJobs></ListJobs>
                <ViewJob></ViewJob>
            </div>
        </div>
     );
}
 
export default MainLayout;