import styles from './styles.module.scss';

interface HeaderProps {
    onOpenNewClientModal: () => void;
}

export function Header({ onOpenNewClientModal }: HeaderProps) {
    return (
        <header className={styles.container}>

            <div className={styles.headerWrapper}>
                <strong>Healthy Food</strong>
                <div className={styles.navWrapper}>
                    <nav>
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