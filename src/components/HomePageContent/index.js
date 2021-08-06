import Image from 'next/image';
import { useTheme } from '../../utils/ThemeProvider';
import Video from '../Video';
import styles from './homePageContent.module.scss';
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const HomePageContent = () => {
  const { theme } = useTheme();
  const { locale } = useRouter();
  const { t, i18n, ready } = useTranslation(["home"], { useSuspense: false });
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  if (!ready) {
    return <h1>Loading...</h1>;
  }
  return (
    <article
      className={`${styles["homepageContent"]} ${
        theme === "DEFAULT"
          ? styles["homepageContent--default"]
          : styles["homepageContent--dark"]
      }`}
    >
      <section className={styles["homepageContent__section"]}>
        <div
          className={`${styles["homepageContent__text"]} ${
            styles[`homepageContent__text--left`]
          }`}
        >
          <h2 className={styles["homepageContent__header"]}>
            {t("home:why:headline")}
          </h2>
          <p className={styles["homepageContent__paragraph"]}>
            {t("home:why:text")}
          </p>
        </div>
        <div className={styles["homepageContent__imageWrapper"]}>
          <Image
            src="/assets/resource-images/writing-for-accessibility/01-image.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
  
      <section className={styles["homepageContent__section"]}>
        <div
          className={`${styles["homepageContent__text"]} ${
            styles[`homepageContent__text--right`]
          }`}
        >
          <h2 className={styles["homepageContent__header"]}>
            {t("home:who:headline")}
          </h2>
          <p className={styles["homepageContent__paragraph"]}>
            {t("home:who:text")}
          </p>
        </div>
        <div
          className={`${styles["homepageContent__imageWrapper"]} ${styles["homepageContent__imageWrapper--right"]}`}
        >
          <Image
            src="/assets/resource-images/DEI-at-work/01-image.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
  
      <section className={styles["homepageContent__section--callout"]}>
        <div className={styles["homepageContent__text"]}>
          <h2 className={styles["homepageContent__header"]}>
            {t("home:cost:headline")}
          </h2>
          <h5 className={styles["homepageContent__paragraph"]}>
            {t("home:cost:text")}
          </h5>
        </div>
      </section>
  
      <section className={styles["homepageContent__section"]}>
        <h2>Learn more about the course.</h2>
        <Video videoSrc="/assets/videos/demo-video.mp4">
          <track
            label="English"
            kind="subtitles"
            srcLang="en-US"
            src="/assets/videos/demo-video.vtt"
            default
          />
        </Video>
      </section>
    </article>
  );
};
export default HomePageContent;
