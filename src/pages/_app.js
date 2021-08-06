import { ThemeProvider } from '../utils/ThemeProvider';
import { UserProvider } from '@auth0/nextjs-auth0';

import 'normalize.css';
import '../styles/globals.scss';
import "../utils/i18n";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </>
  );
};

export default App;