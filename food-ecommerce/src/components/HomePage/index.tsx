import styles from './styles.module.scss'
export function HomePage() {
  return (
    <div className={styles.ContentContainer}>
      <section className={styles.hero}>

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
      <img className={styles.illustration}
        src="./images/illustration.svg" alt="illustration" />
    </div>


  );
}