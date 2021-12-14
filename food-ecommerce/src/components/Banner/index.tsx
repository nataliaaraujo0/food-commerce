import styles from './styles.module.scss'
export function Banner() {
  return (
    <div className={styles.bannerWrapper}>

      <section className={styles.bannerSearch}>

        <h1>Ready for
          Trying a new recipe?</h1>

        <div className={styles.inputContent}>
          <input type="text"
            placeholder="Search healthy recipes" />
          <div className={styles.searchContent}>
            <img src="./images/icon.svg" alt="" />
          </div>
        </div>
      </section>


    </div>

  );
}