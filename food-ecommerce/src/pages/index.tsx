import { Banner } from '../components/Banner'
import { BestServices } from '../components/BestServices'
import { CatalogBlog } from '../components/CatalogBlog'
import { CatalogFood } from '../components/CatalogFood'
import { CatalogFooter } from '../components/CatalogFooter'
import { Footer } from '../components/Footer'
import NextImage from 'next/image';

import styles from './home.module.scss'

export default function Home() {

  return (
    <>
      <head>
        <title>Healthy Food Commerce</title>
      </head>

      <main className={styles.homeContent}>
        <NextImage className={styles.illustration}
          src="/images/illustration.svg"
          alt="illustration"
          width="872" height="743.301"
        />

        <Banner />
        <CatalogFood />

        <BestServices />
        <CatalogBlog />
        <NextImage className={styles.footer}
          src="/images/bloco_final_image.svg"
          alt="footer"
          width="679"
          height="672"
        />

        <CatalogFooter />
        <Footer />
      </main>

    </>
  )

}
