import styles from './home.module.scss'
export default function Home() {
  return (
    <>
      <head>
        <title>Healthy Food Commerce</title>
      </head>

      <main>

        <section className={styles.hero}>
          <img src="./images/illustration.svg" alt="" />

          <h1>Ready for
            Trying a new recipe?</h1>

        </section>
      </main>

    </>
  )

}
