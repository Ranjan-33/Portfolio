import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className={styles.container} id="Education">
      <h2 className={styles.title}> Education </h2>
      <br></br>
      <div>
        <ul>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3> Schooling </h3>
              <br></br>
              <p>LR Cambridge School , Wilson Garden Bangalore</p>
              <p>2018</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3> College </h3>
              <br></br>
              <p> Vajaya Bifurcated PU college , Southend Circle Bangalore </p>
              <p>2019-2021</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>University</h3>
              <br></br>
              <p>
                [ Visvesvaraya Technological University ] <br></br>
                Sambhram Istitute of Technology , Bangalore
              </p>
              <p>2021 - Present</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
