import styles from "./App.module.css";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/about/About";
import Project from "./components/projectss/project";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
