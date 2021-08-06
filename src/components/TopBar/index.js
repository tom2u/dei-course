import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useTheme } from '../../utils/ThemeProvider';

import styles from './topBar.module.scss';

const TopBar = () => {
    const { pathname, locale, locales, defaultLocale, query } = useRouter();
    const { t, i18n, ready } = useTranslation(["header"], { useSuspense: false });
    const { theme, setTheme } = useTheme();
    
    useEffect(() => {
      i18n.changeLanguage(locale);
    }, [locale]);

    const handleChangeLanguage = (locale) => {
      i18n.changeLanguage(locale);
    
      const localePrefix =
        locale === defaultLocale ? "" : `/${locale.toLowerCase()}`;
    
      if (query.slug) {
        const pathPrefix = pathname.replace(/^\/([^\/]*).*$/, "$1");
        location.assign(`${localePrefix}/${pathPrefix}/${query.slug}`);
      } else {
        location.assign(`${localePrefix}${pathname}`);
      }
    };

    if (!ready) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className={styles['topbar']}>
        <div className={styles['topbar__wrapper']}>
          {locales.map((locale) => {
            return (
              <button key={locale} onClick={() => handleChangeLanguage(locale)}>
                {t(`header:${locale}`)}
              </button>
            );
          })}
          <button
            onClick={() =>
              setTheme({
                type: theme === 'DEFAULT' ? 'HIGH_CONTRAST' : 'DEFAULT',
              })
            }
          >
            {theme === 'DEFAULT' ? 'Default Theme' : 'High Contrast Theme'}
          </button>
        </div>
      </div>
    );
  };
  export default TopBar;