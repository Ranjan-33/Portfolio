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
          <a href="mailto:testrk33@gmail.com">Ranjan kumar verma</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt={"linkedin"} />
          <a href="https://www.linkedin.com/in/ranjan-kumar-verma-5aa805271/">
            {/* Ranjan kumar verma */}
            linkedin/Ranjan
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt={"github"} />
          <a href="https://github.com/Ranjan-33"> github/Ranjan-33</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/in.png")} alt={"insta"} />
          <a href="https://instagram.com/Ranjan__kr__verma_33">Insta/Ranjan</a>
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
