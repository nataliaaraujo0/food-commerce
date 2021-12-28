import styles from './styles.module.scss';
import NextImage from 'next/image';

export function Search({ title, Image = '', buttonText = '' }) {

    const imageSource = <NextImage
        src={Image}
        alt="Icon Source"
        width={16}
        height={16}
    />

    return (
        <section className={styles.bannerSearch}>

            <h1>{title}</h1>

            <div className={styles.inputContent}>
                <input type="text"
                    placeholder="Search healthy recipes" />
                <button className={styles.searchContent}>
                    {Image && imageSource}
                    {buttonText && <span>{buttonText}</span>}
                </button>
            </div>
        </section>
    )
}