import React from "react";
import { getImageUrl } from "../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I'm Ranjan Verma </h1>
        <p className={styles.description}>
          I'm a full-Stack developer with 3 years of Experience with React and
          Nodejs . reach out if you'd like to learn more!!!
        </p>
        <a href="mailto:myemail@gmail.com" className={styles.contactBtn}>
          Contact me{" "}
        </a>
      </div>
      <img
        src={getImageUrl("hero/img1.jpg")}
        alt="hero img of me "
        className={styles.heroImg}
      />
      <div className={styles.topblur}></div>
      <div className={styles.bottomblur}></div>
    </section>
  );
};

export default Hero;
