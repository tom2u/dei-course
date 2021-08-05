import styles from './emailForm.module.scss';

const EmailForm = () => {
  return (
    <section
      className={styles['emailForm']}
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
