import React from "react";
import styles from "./ContactForm.module.css";
const ContactForm = () => {
  return (
    <section className="" id="ContactForm">
      <div>
        <form
          className={styles.form}
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="3cf0b875-cf37-45a0-a962-c2470455e416"
          />

          <p className={styles.headpara}>GET IN TOUCH</p>
          <h2 className={styles.title}> Contact me </h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
