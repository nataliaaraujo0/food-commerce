import '../../styles/global.scss';
import { Header } from '../components/Header';
import Modal from 'react-modal';
import { useState } from 'react';
function MyApp({ Component, pageProps }) {

  const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false);

  function handleOpenNewClientModal() {
    setIsNewClientModalOpen(true);
  }
  function handleCloseNewClientModal() {
    setIsNewClientModalOpen(false);
  }
  return (
    <>

      <Header onOpenNewClientModal={handleOpenNewClientModal} />
      <Component {...pageProps} />

      <Modal isOpen={isNewClientModalOpen}
        onRequestClose={handleCloseNewClientModal} >

        <h2>Cadastrar usuário</h2>
        <div>

          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Data de nascimento" />
          <input type="text" placeholder="Cpf" />
          <input type="text" placeholder="Cep" />

        </div>
      </Modal>
    </>
  )
}

export default MyApp
