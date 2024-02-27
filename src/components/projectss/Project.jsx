import React from "react";
import styles from "./project.module.css";
import project from "../../data/project.json";
import ProjectCard from "./ProjectCard";
const Project = () => {
  return (
    <section id="project" className={styles.container}>
      <h2 className={styles.title}>projects</h2>
      <div className={styles.project}>
        {project.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Project;
