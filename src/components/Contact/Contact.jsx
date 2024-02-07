import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt={"emil"} />
          <a href="testrk33@gmail.com">testrk33@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt={"linkedin"} />
          <a href="https://www.linkedin.com/in/ranjan-kumar-verma-5aa805271/">
            {/* Ranjan kumar verma */}
            linkedin.com/mylinkedin
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt={"github"} />
          <a href="https://github.com/Ranjan-33"> github.com/mygithub</a>
        </li>
        {/* we can add more contact items */}
        {/* <li>
          <img src={getImageUrl("contact/instagram.png")} alt={"inat"} />
          <a href="https://instagram.com">instagram</a>
        </li> */}
      </ul>
    </footer>
  );
};

export default Contact;
