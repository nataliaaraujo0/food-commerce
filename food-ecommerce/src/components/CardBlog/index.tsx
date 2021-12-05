import styles from './styles.module.scss'

export function CardBlog({ imgUrl, title, titleAvatar }) {
    return (
        <div className={styles.ContentContainer}>

            <img src={imgUrl} alt="" />
            <h1>{title}</h1>

            <div className={styles.CardAvatar}>
                <div></div>
                <p>{titleAvatar}</p>
            </div>

        </div>

    )
}