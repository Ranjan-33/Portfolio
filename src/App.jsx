import styles from "./App.module.css";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/about/About";
import Project from "./components/projectss/Project";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Education />

      <Contact />
    </div>
  );
}

export default App;
