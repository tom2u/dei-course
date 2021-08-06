import Link from 'next/link';
import { useTheme } from '../../utils/ThemeProvider';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import styles from './header.module.scss';

const Header = () => {
  const { theme } = useTheme();
  const { user, error } = useUser();

  const { pathname, locale } = useRouter();
  const { t, i18n, ready } = useTranslation(["header"], { useSuspense: false });
  
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);
  
  if (!ready) {
    return <h1>Loading...</h1>;
  }

  return (
    <header
      className={`${styles["header"]} ${
        theme === "DEFAULT" ? styles["header--default"] : styles["header--dark"]
      }`}
    >
      <div className={styles["header__grid"]}>
        <div className={styles["header__title"]}>
          <Link href="/" locale={locale}>
            <a className={styles["header__title-link"]}>DEI &amp; Allyship</a>
          </Link>
          <h2 className={styles["header__title-byline"]}>
            A Saga Education Course
          </h2>
        </div>
        <nav className={styles.header__nav}>
          <Link href="/resources" locale={locale}>
            <a className={styles["header__navlink"]}>{t("header:resources")}</a>
          </Link>
          {user ? (
            <a className={styles["header__navlink"]} href="/api/auth/logout">
              {t("header:logout")}
            </a>
          ) : (
            <a
              className={styles["header__navlink"]}
              href={`/api/auth/login?redirectUrl=${pathname}`}
            >
              {t("header:login")}
            </a>
          )}
        </nav>
      </div>
      {error && <div>{error}</div>}
    </header>
  );
};
export default Header;
