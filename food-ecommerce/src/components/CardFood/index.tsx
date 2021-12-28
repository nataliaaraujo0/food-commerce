import styles from './styles.module.scss'
import NextImage from 'next/image';
export function CardFood({ imgUrl, title }) {
    return (
        <div className={styles.container}>

            <div className={styles.cardContainer}>

                <NextImage src={imgUrl} alt=""
                    width="253"
                    height="225"
                />
                <div className={styles.cardContent}>

                    <h1>{title}</h1>
                    <button type="button">See Recipe</button>
                </div>

            </div>
        </div>


    )
};