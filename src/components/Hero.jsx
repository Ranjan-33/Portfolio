import React from "react";
import { getImageUrl } from "../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I'm Ranjan Verma </h1>
        <p className={styles.description}>
          Passionate BE.CSE student adept in crafting impactful solutions with
          JavaScript & React. Ready to leverage programming skills for
          collaborative, innovative projects. Let's connect and build the future
          together! 🚀
        </p>
        {/* <a href="mailto:testrk33@gmail.com" className={styles.contactBtn}>
          Contact me
        </a> */}

        <a
          href="./assets/hero/resume.pdf"
          download="resume.pdf"
          className={styles.contactBtn}
        >
          Download Resume
          {/* <button className={styles.contactBtn}> Download Resume</button> */}
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
