import { useContext } from "react";
import Tilt from "react-parallax-tilt";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import "./ProjectCard.scss";

const ProjectCard = ({ project }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Tilt tiltMaxAngleX="10" tiltMaxAngleY="10" className="project-card">
      <img
        src={`/assets/images/projectsOriginalSize/${project.images[0]}`}
        alt={project.title}
        className="project-image"
      />

      <div
        className={
          isDarkMode ? "project-info dark-info" : "project-info light-info"
        }
      >
        <div className="project-text">
          <div className="project-title">
            <h3>{project.title}</h3>
            {/* Links */}
            {project.links.codeRepo && (
              <a href={project.links.codeRepo} target="_blank" rel="noreferrer">
                View Code
              </a>
            )}
            {project.links.website && (
              <a href={project.links.website} target="_blank" rel="nonreferrer">
                View Website
              </a>
            )}
          </div>
          <p>{project.description}</p>
        </div>

        {/* Tech Stack */}
        <ul className="tech-stack">
          {project.techStack.map((tech, index) => (
            <li className="tag" key={index}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
