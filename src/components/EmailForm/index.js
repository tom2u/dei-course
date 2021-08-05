import styles from './emailForm.module.scss';
import { useTheme } from '../../utils/ThemeProvider';

const EmailForm = () => {
  const { theme } = useTheme();
  return (
    <section
      className={`${styles['emailForm']} ${
        theme === 'DEFAULT'
          ? styles['emailForm--default']
          : styles['emailForm--dark']
      }`}
    >
      <h3>Sign up for notifications</h3>
      <p>Get updates on the latest content and resources for this course.</p>
      <form data-netlify='newsletter-signup'>
        <input
          aria-label='Email address'
          type='email'
          id='emailForm'
          placeholder='Your email address'
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default EmailForm;
