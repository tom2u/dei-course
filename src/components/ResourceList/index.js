import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../../utils/ThemeProvider";
// author's repo:
import { useRouter } from "next/router";

import styles from "./resourceList.module.scss";

const ResourceList = ({ resources = [] }) => {
  // author's repo:
  const { locale } = useRouter();
  const { theme } = useTheme();
  const { t, i18n, ready } = useTranslation(["resources"], {
    useSuspense: false,
  });

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  if (!ready) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className={styles["resource__grid"]}>
      {resources.map((resource) => {
        return (
          <div
            key={resource.link}
            className={`${styles["resource__item"]} ${
              theme === "DEFAULT"
                ? styles["resource__item--default"]
                : styles["resource__item--dark"]
            }`}
          >
            <Image
              src={resource.featuredImage}
              alt={`Select to see this resource`}
              className={styles["resource__item-image"]}
              layout="fill"
              objectFit="cover"
            />
            <div className={styles["resource__item-data"]}>
              <div
                className={`${styles["resource__item-data__inner"]} ${
                  theme === "DEFAULT"
                    ? styles["resource__item-data__inner--default"]
                    : styles["resource__item-data__inner--dark"]
                }`}
              >
                <Link href={resource.link} locale={locale}>
                  <a>
                    <h3 className={styles["resource__item-link"]}>
                      {resource.title}
                    </h3>
                  </a>
                </Link>
                <p>{resource.description}</p>
                <Link href={resource.link}>
                  <a
                    className={`${styles["resource__item-button"]} ${
                      theme === "DEFAULT"
                        ? styles["resource__item-button--default"]
                        : styles["resource__item-button--dark"]
                    }`}
                  >
                    {t("resources:view")}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ResourceList;
