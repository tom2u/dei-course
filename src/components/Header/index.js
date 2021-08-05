import Link from 'next/link';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
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
        </nav>
      </div>
    </header>
  );
};
export default Header;
