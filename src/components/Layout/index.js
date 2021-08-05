import Head from 'next/head';
import EmailForm from '../EmailForm';
import Header from '../Header';
import Footer from '../Footer';

import styles from './layout.module.scss';

const Layout = ({
  pageTitle,
  description,
  previewImage,
  children,
  ...props
}) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>Saga Education DEI Course Website</title>
      </Head>
      <div className={styles['page__layout']}>
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
