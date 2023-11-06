import styles from '../styles/Filter.module.css'

const Filter = () => {

    const search = (e) => {
        e.preventDefault()
    }

    return ( 
        <div className={styles['filter-container']}>
            <form className={styles['filters']} onSubmit={search}>
                <div className={styles['filter-inputs']}>
                    <input className={styles['input-items']} name='key words' type='text' placeholder='Job Title, Keyword or Company' />
                    <input className={styles['input-items']} name='city' type='text' placeholder='Area, City or Town'/>
                    <select className={styles['select']} name="specialization" placeholder='Specialization'>
                        <option className={styles['select-options']} value="all">All Job Specialization</option>
                        <option className={styles['select-options']} value="sales/marketing">Sales/Marketing</option>
                        <option className={styles['select-options']} value="hotel/restaurant">Hotel/Restaurant</option>
                        <option className={styles['select-options']} value="engineering">Engineering</option>
                        <option className={styles['select-options']} value="accounting/finance">Accounting/Finance</option>
                    </select>
                    <button className={styles['search-btn']}>Search</button>
                </div>
                {/* <div className={styles['filter-dropdowns']}>
                    <div>Salary</div>
                    <div>Job type</div>
                    <div>Date Posted</div>
                </div> */}
            </form>
        </div>
    );
}
 
export default Filter;