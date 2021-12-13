import { BestServices } from '../components/BestServices'
import { CatalogBlog } from '../components/CatalogBlog'
import { CatalogFood } from '../components/CatalogFood'
import { Footer } from '../components/Footer'
import { HomePage } from '../components/HomePage'
import { Membership } from '../components/Membership'
import styles from './home.module.scss'

export default function Home() {

  return (
    <>
      <head>
        <title>Healthy Food Commerce</title>
      </head>

      <main className={styles.homeContent}>
        <HomePage />
        <CatalogFood />
        <BestServices />
        <CatalogBlog />
        <Membership />
        <Footer />
      </main>

    </>
  )

}
