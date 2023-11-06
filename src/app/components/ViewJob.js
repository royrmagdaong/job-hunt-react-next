import styles from '../styles/ViewJob.module.css'
import Image from 'next/image'

const ViewJob = () => {

    return (
        <div className={styles['container']}>
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
                <li>Highlight</li>
                <li>Highlight</li>
                <li>Highlight</li>
            </ul>
            <div className={styles['job-description']}>
                <h4>Job Description</h4>
            </div>
            <div className={styles['company-info']}>
                <h4>Who we are</h4>
            </div>
        </div>
    );
}
 
export default ViewJob;