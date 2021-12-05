import styles from './styles.module.scss'

export function CardBlog({ imgUrl, title, titleAvatar }) {
    return (
        <div className={styles.cardContainer}>

            <img src={imgUrl} alt="" />
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