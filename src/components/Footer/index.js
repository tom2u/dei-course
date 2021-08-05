import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <h5>Made with care by the DEI team at Saga Education.</h5>
      </div>
    </footer>
  );
};

export default Footer;
