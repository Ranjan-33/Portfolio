import React from "react";
import { getImageUrl } from "../utils";
import styles from "./Hero.module.css";
import Resume from "../../assets/hero/Ranjan_Resume____.pdf";
// import RanjanResume from "../../assets/Ranjan_Resume____.pdf";
const Hero = () => {
  // const handleDownload = () => {
  //   const resumeUrl = "../../public/resume.pdf"; // Adjust the path
  //   const link = document.createElement("a");
  //   link.href = resumeUrl;
  //   link.download = "Rkresume.pdf";
  //   link.click();
  // };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm Ranjan Verma <br />
        </h1>
        <p className={styles.description}>
          Passionate Computer Science student skilled in JavaScript and React,
          eager to contribute to innovative projects. Let's connect and create
          something impactful!🚀
        </p>
        {/* <button className={styles.contactBtn} onClick={handleDownload}>
          Download Resume
        </button> */}

        <a
          href={Resume}
          download="Ranjan_Resume.pdf"
          className={styles.contactBtn}
        >
          Download Resume
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
