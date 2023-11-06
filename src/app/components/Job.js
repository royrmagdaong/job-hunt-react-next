import styles from '../styles/Job.module.css'
import Image from 'next/image'
import { useContext } from 'react'
import JobContext from "../layout/JobContext";

const Job = (props) => {
    return (
        <div className={styles['card']}>
            <div className={styles['logo']}>
                <Image
                    src={`/company-a.jpg`}
                    alt="Company Logo"
                    width={80}
                    height={50}
                />
            </div>
            <div className={styles['job-title']}>job title</div>
            <div className={styles['company-name']}>company name</div>
            <div className={styles['location']}>location</div>
            <div className={styles['salary']}>salary</div>
            <ul>
            </ul>
        </div>
    );
}
 
export default Job;