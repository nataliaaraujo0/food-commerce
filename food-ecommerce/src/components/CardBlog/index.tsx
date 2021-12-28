import styles from './styles.module.scss'
import NextImage from 'next/image';
export function CardBlog({ imgUrl, title, titleAvatar }) {
    return (
        <div className={styles.cardContainer}>

            <NextImage src={imgUrl} alt=""
                width="348"
                height="247" />
            <div className={styles.cardContent}>
                <h1>{title}</h1>

                <div className={styles.CardAvatar}>
                    <div></div>
                    <p>{titleAvatar}</p>
                </div>
            </div>
        </div>

    )
}