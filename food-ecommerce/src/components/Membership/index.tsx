import { Search } from '../Serach'
import styles from './styles.module.scss'

export function Membership() {
    return (
        <div className={styles.ContentContainer}>
            <Search title="Join our membership
            to get special offer"/>

         
            <footer className={styles.ContentContainer}>
                <p>© Copyrights 2019 Stack. All Rights Reserved.</p>

                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>

            </footer>
        </div>
    )
}