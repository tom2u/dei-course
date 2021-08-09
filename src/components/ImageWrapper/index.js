import Image from "next/image";
import styles from "./imageWrapper.module.scss";
import { useTheme } from "../../utils/ThemeProvider";

const ImageWrapper = (props) => {
  const { theme } = useTheme();
  return (
    <div
      className={`${styles["image__media-alt"]} ${
        theme === "DEFAULT"
          ? styles["image__media-alt--default"]
          : styles["image__media-alt--dark"]
      }`}
    >
      <Image
        className={styles["image__media"]}
        src={props.src}
        alt={props.alt || "alt text"}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className={styles["image__media-alt"]}>
        <p>{props.alt}</p>
      </div>
    </div>
  );
};

export default ImageWrapper;
