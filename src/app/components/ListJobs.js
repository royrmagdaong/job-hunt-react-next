import styles from '../styles/ListJobs.module.css'
import Job from "../components/Job";

const ListJobs = () => {
    return (
        <div className={styles['container']}>
            <Job></Job>
        </div>
    );
}
 
export default ListJobs;