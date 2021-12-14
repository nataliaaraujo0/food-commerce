import '../../styles/global.scss';
import { Header } from '../components/Header';
import { useState } from 'react';
import { NewClientModal } from '../components/NewClientModal';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {

  const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false);

  function handleOpenNewClientModal() {
    setIsNewClientModalOpen(true);
  }
  function handleCloseNewClientModal() {
    setIsNewClientModalOpen(false);
  }
  return (
    <CookiesProvider>
      <NewClientModal
        isOpen={isNewClientModalOpen}
        onRequestClose={handleCloseNewClientModal}
      />
      <Header onOpenNewClientModal={handleOpenNewClientModal} />
      <Component {...pageProps} />
    </CookiesProvider>
  )
}

export default MyApp
