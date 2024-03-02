import { Contact, About, Hero, Navbar, Projects, Timeline } from "./components";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
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
