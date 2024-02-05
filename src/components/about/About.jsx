import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>

      <div className={styles.content}>
        <img
          src={getImageUrl("about/pic.png")}
          alt=" me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend developer </h3>
              <p>
                i'm a frontend developer with Experience in building and
                optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt=" server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend developer </h3>
              <p>
                i'm Experience developing fast and optimized back-end sysytem
                APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend developer </h3>
              <p>
                i have designed multiple landing pages and have sysytem as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
