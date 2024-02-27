import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import content from "../../data/about.json";
import "./About.scss";

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
            {content[0].about.map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                <br />
                <br />
              </React.Fragment>
            ))}
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
