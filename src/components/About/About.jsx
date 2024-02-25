import "./About.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div id="About">
      <div className={isDarkMode ? "terminal dark-bg" : "terminal light-bg"}>
        <header>
          <div className="button green"></div>
          <div className="button yellow"></div>
          <div className="button red"></div>
        </header>
        <div className="terminal-text">
          <p>
            <span className="terminal-username">user@sebbooth.github.io</span>:
            <span className="terminal-path">~/portfolio</span>$ cat about.txt
          </p>
          <p>
            Hi, I'm Sebastian Booth, and I'm a software developer. I love all
            programming, and am particularly passionate about meshing creativity
            with code, whether that means finding creative solutions for
            problems, or developing applications that support creativity.
            <br />
            <br />I primarily code in C++ and Python, and have some experience
            writing in C, Javascript and HTML/CSS. I'm constantly learning and
            always eager to pick up new skills. Below is a timeline of my
            experience along with some projects I've made or am working on that
            showcase my skills and interests.
            <br />
            <br />
            Currently, I am seeking programming/software engineering jobs around
            Vancouver, BC (or remote).
          </p>
          <p className="terminal-cursor">
            <span className="terminal-username">user@sebbooth.github.io</span>:
            <span className="terminal-path">~/portfolio</span>$
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
