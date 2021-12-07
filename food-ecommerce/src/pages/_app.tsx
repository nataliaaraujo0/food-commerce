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
      <Header onOpenNewClientModal={handleOpenNewClientModal} />
      <Component {...pageProps} />

      <NewClientModal
        isOpen={isNewClientModalOpen}
        onRequestClose={handleCloseNewClientModal}
      />
    </>
  )
}

export default MyApp
