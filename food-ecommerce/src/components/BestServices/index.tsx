import styles from './styles.module.scss'
import NextImage from 'next/image';


export function BestServices() {

    return (
        <div className={styles.container}>
            <NextImage className={styles.serviceImg}
                src="/images/bloco_services.svg"
                alt="Image Service"
                width="718.272"
                height="726.925"
            />
            <div className={styles.contentService}>
                <div className={styles.wrapperService}>
                    <div className={styles.ContentServices}>
                        <h1>The best services ready
                            To serve you</h1>

                        <div className={styles.texts}>
                            <p> Far far away, behind the word mountains,
                                far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                            <p>Separated they live in Bookmarksgrove right
                                at the coast of the Semantics, a large language ocean.
                            </p>
                            <p>A small river named Duden flows by their place and supplies
                                it with the necessary regelialia.</p>
                        </div>
                        <div className={styles.wrapperButton}>
                            <button>Know More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}