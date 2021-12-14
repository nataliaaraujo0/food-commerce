import { Banner } from '../components/Banner'
import { BestServices } from '../components/BestServices'
import { CatalogBlog } from '../components/CatalogBlog'
import { CatalogFood } from '../components/CatalogFood'
import { Footer } from '../components/Footer'
import styles from './home.module.scss'

export default function Home() {

  return (
    <>
      <head>
        <title>Healthy Food Commerce</title>
      </head>

      <main className={styles.homeContent}>
        <img className={styles.illustration}
          src="./images/illustration.svg" alt="illustration" />

        <Banner />
        <CatalogFood />
        <BestServices />
        <CatalogBlog />
        <img className={styles.footer}
          src="./images/bloco_final_image.svg" alt="footer" />
        <Footer />
      </main>

    </>
  )

}
