import styles from './styles.module.scss'

export function CardFood({ imgUrl, nome }) {
    return (

        <div className={styles.cardContainer}>

            <img src={imgUrl} alt="" />
            <div className={styles.cardContent}>
                <h1>{nome}</h1>
                <button type="button">See Recipe</button>
            </div>
            
        </div>


    )
};