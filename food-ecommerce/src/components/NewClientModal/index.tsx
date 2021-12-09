import styles from './styles.module.scss'
import Modal from 'react-modal';
import { api } from '../../services/api';
interface NewClientModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewClientModal({ isOpen, onRequestClose }: NewClientModalProps) {

  const batatinha = async (cep: string) => {
    if (cep.length === 8) {
      const ovo = await api.get(`${cep}/json/`);
      console.log(ovo);
    }
  }

  return (
    <Modal isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <form className={styles.ContentForm}>
        <h2>Cadastrar usuário</h2>

        <input type="text" placeholder="Cep"
          onChange={(evento) => {
            batatinha(evento.target.value);
          }}
        />
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Data de nascimento" />
        <input type="text" placeholder="Cpf" />
        <input type="text" placeholder="logradouro" />
        <input type="text" placeholder="bairro" />
        <input type="text" placeholder="uf" />

        <button type="submit">Register</button>
      </form>
    </Modal>
  )
}
