import { Search } from '../Serach'
import styles from './styles.module.scss'

export function CatalogFooter() {
    return (
        <div className={styles.container}>
            <div className={styles.footerWrapper} id="join">
                <Search title="Join our membership
                to get special offer" buttonText="Join" />
            </div>
        </div>
    );
}