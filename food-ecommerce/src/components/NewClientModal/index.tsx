import styles from './styles.module.scss';
import Modal from 'react-modal';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({

  nome: yup.string().required(),
  dataNascimento: yup.string().required(),
  cpf: yup.string().required(),

}).required();
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

interface User {
  nome: string;
  datadeNascimento: string;
  cpf: string;

  endereco: Address;
}

export function NewClientModal({ isOpen, onRequestClose }: NewClientModalProps) {

  const [users, setUsers] = useState<User[]>([]);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  useEffect(() => {
    const usersStr = localStorage.getItem('users');

    if (usersStr) {
      setUsers(() => JSON.parse(usersStr));
    }

  }, []);

  useEffect(() => {

    const newUsersStr = JSON.stringify(users);
    localStorage.setItem('users', newUsersStr);

  }, [users])

  const handleFetchAddress = async (cep: string) => {
    if (cep.length === 8) {
      const res = await api.get<Address>(`${cep}/json/`);
      setValue('bairro', res.data.bairro);
      setValue('logradouro', res.data.logradouro);
      setValue('uf', res.data.uf);
    }
  }

  const onChangeCep = (cep: string) => {

    handleFetchAddress(cep);
  }

  const onRegister = ({ nome, datadeNascimento, cpf, cep, logradouro, bairro, uf }) => {

    const user: User = {

      nome,
      datadeNascimento,
      cpf,
      endereco: {
        cep,
        logradouro,
        bairro,
        uf
      }
    }
    setCookie('user', user);
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <Modal isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <form className={styles.ContentForm} onSubmit={handleSubmit(onRegister)}>
        <h2>Cadastrar usuário</h2>


        <input type="text" placeholder="Nome" {...register('nome')} />
        <p>{errors.nome && 'Campo obrigatorio'}</p>

        <input type="text" placeholder="Data de nascimento" {...register('dataNascimento')} />
        <p>{errors.dataNascimento && 'Campo obrigatorio'}</p>
        <input type="text" placeholder="Cpf" {...register('cpf')} />
        <p>{errors.cpf && 'Campo obrigatorio'}</p>
        <input type="text" placeholder="Cep"
          onChange={(event) => onChangeCep(event.target.value)} />

        <input type="text" placeholder="logradouro" {...register('logradouro')} />

        <input type="text" placeholder="bairro" {...register('bairro')} />
        <input type="text" placeholder="uf"  {...register('uf')} />

        <button type="submit"
        >Register</button>
      </form>
    </Modal>
  );
}