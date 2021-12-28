import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Image from "next/image"
interface HeaderProps {
    onOpenNewClientModal: () => void;
}

export function Header({ onOpenNewClientModal }: HeaderProps) {

    const [toggleMenu, setToggleMenu] = useState(false);


    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }
    useEffect(function onFirstMount() {
        function onScroll() {
            console.log('onScroll');
        }
        window.addEventListener('scroll', onScroll);
    }, [])

    return (
        <>
            <header className={styles.container}>
                <div className={styles.headerWrapper}>

                    <div className={styles.logoWrapper}>
                        <strong>Healthy Food</strong>
                    </div>

                    {toggleMenu && (
                        <div className={styles.navWrapper}>

                            <nav className={styles.navMobile}>
                                <a href="">HEALTHY RECIPES</a>
                                <a href="#blog">BLOG</a>
                                <a href="#join">JOIN</a>
                                <button className={styles.registerButtonMobile} onClick={onOpenNewClientModal}>REGISTER</button>
                            </nav>

                        </div>
                    )}
                    <nav className={styles.navDesktop}>
                        <a href="">HEALTHY RECIPES</a>
                        <a href="#blog">BLOG</a>
                        <a href="#join">JOIN</a>

                    </nav>
                    <button className={styles.registerButton} onClick={onOpenNewClientModal}>REGISTER</button>

                    <button className={styles.bar} onClick={toggleNav}>
                        <Image
                            src="/images/bar.png"
                            alt=""
                            width="50"
                            height="50"
                        />
                    </button>

                </div>
            </header>
        </>

    )
}