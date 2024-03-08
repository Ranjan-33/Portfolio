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
              <h3>UI developer </h3>
              <br></br>
              <p>
                Crafting interfaces that transcend aesthetics, prioritizing
                seamless user experiences through simplicity, accessibility, and
                functionality.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="cursor icon" />

            <div className={styles.aboutItemText}>
              <h3>Frontend developer </h3>
              <br></br>
              <p>
                i have designed multiple landing pages , website Transforming
                design into interactive web applications using HTML,
                CSS,JavaScript and React.Committed to staying current with web
                development trends for cutting-edge and user-friendly projects
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt=" server icon" />
            <div className={styles.aboutItemText}>
              <h3> Versatile Skills </h3>
              <br></br>
              <p>
                i Beyond UI and frontend development, I possess a foundational
                grasp of Java, C, C++, Python, and MySQL. This enables seamless
                collaboration with backend developers, contributing across the
                full development lifecycle.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
