import styles from './styles.module.scss'
import Modal from 'react-modal';
import { api } from '../../services/api';
import { useState } from 'react';
interface NewClientModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
interface Address {
  cep: string;
  logradouro: string;
  bairro: string;
  uf: string;
}

export function NewClientModal({ isOpen, onRequestClose }: NewClientModalProps) {

  const [address, setAddress] = useState({} as Address);

  const handleFetchAddress = async (cep: string) => {
    if (cep.length === 8) {
      const res = await api.get<Address>(`${cep}/json/`);
      setAddress(res.data);
    }
  }

  const onChangeCep = (cep: string) => {
    setAddress(prevState => ({
      ...prevState,
      cep,
    }))
    handleFetchAddress(cep);
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
          onChange={(event) => onChangeCep(event.target.value)}
        />

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Data de nascimento" />
        <input type="text" placeholder="Cpf" />
        <input type="text" placeholder="logradouro" value={address.logradouro} />
        <input type="text" placeholder="bairro" value={address.bairro} />
        <input type="text" placeholder="uf" value={address.uf} />

        <button type="submit">Register</button>
      </form>
    </Modal>
  )
}
