import React from "react";
import { getImageUrl } from "../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  const handleDownload = () => {
    const resumeUrl = "../../public/resume.pdf"; // Adjust the path
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Rkresume.pdf";
    link.click();
  };

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
        <button className={styles.contactBtn} onClick={handleDownload}>
          Download Resume
        </button>

        {/* <a
          href="./assets/hero/resume.pdf"
          download="resume.pdf"
          className={styles.contactBtn}
        >
          Download Resume
        </a> */}
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
