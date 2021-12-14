import styles from './styles.module.scss';
export function Search({title}) {


    return (
        <section className={styles.bannerSearch}>

            <h1>{title}</h1>

            <div className={styles.inputContent}>
                <input type="text"
                    placeholder="Search healthy recipes" />
                <div className={styles.searchContent}>
                    <img src="./images/icon.svg" alt="" />
                </div>
            </div>
        </section>
    )
}