import { Contact, About, Navbar, Projects, Timeline } from "./components";
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </ThemeProvider>
    </>
  );
}

export default App;
