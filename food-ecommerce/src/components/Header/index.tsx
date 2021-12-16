import styles from './styles.module.scss';

interface HeaderProps {
    onOpenNewClientModal: () => void;
}

export function Header({ onOpenNewClientModal }: HeaderProps) {
    return (
        <header className={styles.container}>
            <div className={styles.headerWrapper}>
                <div className={styles.logoWrapper}>
                    <strong>Healthy Food</strong>
                </div>

                <div id="menuToggle">
                    <div id="menu">
                        <div id="bar1" className={styles.bar1}></div>
                        <div id="bar2" className={styles.bar2}></div>
                        <div id="bar3" className={styles.bar3}></div>
                    </div>
                </div>

                <div className={styles.navWrapper}>
                    <nav id="nav">
                        <a href="">HEALTHY RECIPES</a>
                        <a href="">BLOG</a>
                        <a href="">JOIN</a>
                    </nav>
                    <button onClick={onOpenNewClientModal} >REGISTER</button>
                </div>
            </div>
        </header>
    )
}