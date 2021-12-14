import styles from './styles.module.scss'

export function CardFood({ imgUrl, title }) {
    return (
        <div className={styles.container}>

            <div className={styles.cardContainer}>

                <img src={imgUrl} alt="" />
                <div className={styles.cardContent}>
                    <h1>{title}</h1>
                    <button type="button">See Recipe</button>
                </div>
            
            </div>
        </div>


    )
};