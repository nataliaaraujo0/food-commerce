import styles from './styles.module.scss'
import Modal from 'react-modal';

interface NewClientModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewClientModal({ isOpen, onRequestClose }: NewClientModalProps) {
  return (

    <Modal isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <form className={styles.ContentForm}>
        <h2>Cadastrar usuário</h2>

        <input type="text" placeholder="Nome" />
        <input type="number" placeholder="Data de nascimento" />
        <input type="string" placeholder="Cpf" />
        <input type="number" placeholder="Cep" />

        <button type="submit">Register</button>
      </form>
    </Modal>
  )
}