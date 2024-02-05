import styles from "./App.module.css";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/about/About";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Experience></Experience>
    </div>
  );
}

export default App;
