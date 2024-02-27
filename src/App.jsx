import {
  Contact,
  About,
  Hero,
  Navbar,
  Projects,
  Timeline,
  Preloader,
} from "./components";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <Preloader />
      <ThemeProvider>
        <Navbar />
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </ThemeProvider>
    </>
  );
}

export default App;
