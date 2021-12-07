import '../../styles/global.scss';
import { Header } from '../components/Header';
import { useState } from 'react';
import { NewClientModal } from '../components/NewClientModal';

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
      <NewClientModal
        isOpen={isNewClientModalOpen}
        onRequestClose={handleCloseNewClientModal}
      />
      <Header onOpenNewClientModal={handleOpenNewClientModal} />
      <Component {...pageProps} />


    </>
  )
}

export default MyApp
