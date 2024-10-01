import React from "react";
import { getImageUrl } from "../utils";
import styles from "./Hero.module.css";
import Resume from "../../assets/hero/resume.pdf";
import RanjanResume from "../../assets/Ranjan_Resume____.pdf";
import Typist from "react-typist";
import TypingEffect from "react-typing-effect";
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
          Hi, I'm{" "}
          <TypingEffect
            text={["Ranjan verma "]}
            speed={200} // Adjust speed if needed
            eraseSpeed={50} // Speed at which text is erased
            cursorRenderer={(cursor) => <h3>{cursor}</h3>} // Custom cursor if needed
          />
        </h1>
        <p className={styles.description}>
          Passionate BE.CSE student adept in crafting impactful solutions with
          JavaScript & React. Ready to leverage programming skills for
          collaborative, innovative projects. Let's connect and build the future
          together! 🚀
        </p>
        {/* <button className={styles.contactBtn} onClick={handleDownload}>
          Download Resume
        </button> */}

        <a
          href={Resume}
          download="Ranjan_Resume____.pdf"
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
