import Head from 'next/head';
import { useTheme } from '../../utils/ThemeProvider';

import EmailForm from '../EmailForm';
import Header from '../Header';
import Footer from '../Footer';
import TopBar from '../TopBar';

import styles from './layout.module.scss';

const Layout = ({
  pageTitle,
  description,
  previewImage,
  children,
  ...props
}) => {
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>{pageTitle}</title>
      </Head>
      <div
        className={`${styles['page__layout']} ${
          theme === 'DEFAULT'
            ? styles['page__layout--default']
            : styles['page__layout--dark']
        }`}
      >
        <TopBar />
        <Header />
        <main className={styles['page__main-content']}>
          {children}
          <EmailForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
