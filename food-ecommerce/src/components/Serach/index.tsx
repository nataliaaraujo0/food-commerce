import styles from './styles.module.scss';
export function Search({ title, img, buttonText }) {

    return (
        <section className={styles.bannerSearch}>

            <h1>{title}</h1>

            <div className={styles.inputContent}>
                <input type="text"
                    placeholder="Search healthy recipes" />
                <button className={styles.searchContent}>
                    {img && <img src={img} alt="" />}
                    {buttonText && <span>{buttonText}</span>}
                </button>
            </div>
        </section>
    )
}