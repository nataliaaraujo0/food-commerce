import styles from './styles.module.scss'
import Modal from 'react-modal';

interface NewClientModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewClientModal({ isOpen, onRequestClose }: NewClientModalProps) {
  return (

    <Modal isOpen={isOpen}
      onRequestClose={onRequestClose} >

      <h2>Cadastrar usuário</h2>
      <div>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Data de nascimento" />
        <input type="text" placeholder="Cpf" />
        <input type="text" placeholder="Cep" />

      </div>
    </Modal>
  )
}