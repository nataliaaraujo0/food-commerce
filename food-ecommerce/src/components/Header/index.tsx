import { useState } from 'react';
import styles from './styles.module.scss';
import Modal from 'react-modal';

export function Header() {

    const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false);

    function handleOpenNewClientModal() {
        setIsNewClientModalOpen(true);
    }

    function handleCloseNewClientModal() {
        setIsNewClientModalOpen(false);
    }

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <strong>Healthy Food</strong>
                <nav>
                    <a href="">HEALTHY RECIPES</a>
                    <a href="">BLOG</a>
                    <a href="">JOIN</a>
                </nav>
                <button onClick={handleOpenNewClientModal} >REGISTER</button>

                <Modal isOpen={isNewClientModalOpen}
                    onRequestClose={handleCloseNewClientModal}>

                    <h2>Cadastrar usuário</h2>
                </Modal>

            </div>
        </header>
    )
}