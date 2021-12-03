import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <strong>Healthy Food</strong>
                <nav>
                    <a href="">HEALTHY RECIPES</a>
                    <a href="">BLOG</a>
                    <a href="">JOIN</a>
                </nav>
                <button>REGISTER</button>
            </div>
        </header>
    )
}