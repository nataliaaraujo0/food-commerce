import { CatalogFood } from '../components/CatalogFood'
import styles from './home.module.scss'
export default function Home() {
  return (
    <>
      <head>
        <title>Healthy Food Commerce</title>
      </head>

      <main>
        <section className={styles.homeContent}>
          <div className={styles.headlineContent}>

            <h1>Ready for
              Trying a new recipe?</h1>

            <div className={styles.inputContent}>

              <input type="text"
                placeholder="Search healthy recipes" />

              <div className={styles.searchContent}>
                <img src="./images/icon.svg" alt="" />
              </div>
            </div>

          </div>

          <img className={styles.icon} src="./images/illustration.svg" alt="" />

        </section>

        <CatalogFood />
      </main>

    </>
  )

}
