import { Search } from '../Serach'
import styles from './styles.module.scss'

export function Footer() {
    return (
        <div className={styles.container}>
            
            <div className={styles.footerWrapper}>
                <Search title="Join our membership
                to get special offer"/>
            </div>

            <footer className={styles.footer}>
                <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
                <div className={styles.policyContent}>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
            </footer>

        </div>
    );
}