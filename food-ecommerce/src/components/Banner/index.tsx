import { Search } from '../Serach';
import styles from './styles.module.scss'
export function Banner() {
  return (
    <div className={styles.container} >
      <div className={styles.bannerWrapper}>
        <Search
          title="Ready for
          Trying a new recipe?"
          img="images/icon.svg" />
      </div>
    </div>
  );
}