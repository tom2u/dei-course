import Link from 'next/link';
import { useTheme } from '../../utils/ThemeProvider';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';

import styles from './header.module.scss';

const Header = () => {
  const { theme } = useTheme();
  const { pathname } = useRouter();
  const { user, error } = useUser();
  console.log(user);
  return (
    <header
      className={`${styles['header']} ${
        theme === 'DEFAULT' ? styles['header--default'] : styles['header--dark']
      }`}
    >
      <div className={styles['header__grid']}>
        <div className={styles['header__title']}>
          <Link href='/'>
            <a className={styles['header__title-link']}>DEI &amp; Allyship</a>
          </Link>
          <h2 className={styles['header__title-byline']}>
            A Saga Education Course
          </h2>
        </div>
        <nav className={styles.header__nav}>
        <Link href='/resources'>
        <a className={styles['header__navlink']}>Course Resources</a>
        </Link>
        {user ? (
        <a className={styles['header__navlink']} href='/api/auth/logout'>
            Logout
        </a>
        ) : (
        <a
            className={styles['header__navlink']}
            href={`/api/auth/login?redirectUrl=${pathname}`}
        >
            Login
        </a>
        )}
        </nav>
      </div>
    </header>
  );
};
export default Header;
