import styles from './emailForm.module.scss';
import { useTheme } from '../../utils/ThemeProvider';
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const EmailForm = () => {
  const { theme } = useTheme();
  const { locale } = useRouter();
  const { t, i18n, ready } = useTranslation(["email"], { useSuspense: false });

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  if (!ready) {
    return <h1>Loading...</h1>;
  }

  return (
    <section
      className={`${styles["emailForm"]} ${
        theme === "DEFAULT"
          ? styles["emailForm--default"]
          : styles["emailForm--dark"]
      }`}
    >
      <h3>{t("email:header")}</h3>
      <p>{t("email:text")}</p>
      <form data-netlify="newsletter-signup">
        <input
          aria-label={t("email:label")}
          type="email"
          id="emailForm"
          placeholder={t("email:placeholder")}
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default EmailForm;
