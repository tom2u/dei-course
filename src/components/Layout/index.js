import TopBar from "../TopBar";
import Head from "next/head";
import EmailForm from "../EmailForm";
import Header from "../Header";
import Footer from "../Footer";
import { useTheme } from "../../utils/ThemeProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./layout.module.scss";

const Layout = ({
  pageTitle,
  description,
  previewImage,
  children,
  ...props
}) => {
  const { locale, locales, defaultLocale, pathname } = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    if (window) {
      window.document.documentElement.lang = locale;
    }
  }, [locale]);

  const renderLocaleLinks = () => {
    const links = locales.map((localeName) => {
      if (defaultLocale.toLowerCase() === localeName.toLowerCase()) {
        return (
          <>
            <link
              key={localeName}
              rel="alternate"
              hrefLang="x-default"
              href={`${pathname}`}
            />
            <meta property="og:locale" content={localeName} />
          </>
        );
      } else {
        return (
          <>
            <link
              key={localeName}
              rel="alternate"
              hrefLang={localeName}
              href={`/${localeName.toLowerCase()}${pathname}`}
            />
            <meta property="og:locale:alternate" content={localeName} />
          </>
        );
      }
    });
    return links;
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta web_author="tom2u"></meta>
        <title>{pageTitle}</title>
        <meta
          name="google-site-verification"
          content="Ouyuw9dRRd-2HMpK_QGHEvkoh2XkdwHNEAoh4sWGuFo"
        />
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:type" content="website" key="ogtype" />
        {previewImage && (
          <meta property="og:image" content={previewImage} key="ogimage" />
        )}
        {typeof window !== "undefined" && (
          <meta property="og:url" content={window.location.href} key="ogurl" />
        )}
        <meta
          property="og:site_name"
          content={"DEI and Allyship || A Saga Education Course"}
          key="ogsitename"
        />
        <meta property="og:description" content={description} key="ogdesc" />
        {renderLocaleLinks()}
      </Head>
      <div
        className={`${styles["page__layout"]} ${
          theme === "DEFAULT"
            ? styles["page__layout--default"]
            : styles["page__layout--dark"]
        }`}
      >
        <TopBar />
        <Header />
        <main className={styles["page__main-content"]} dir="auto">
          {children}
          <EmailForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
