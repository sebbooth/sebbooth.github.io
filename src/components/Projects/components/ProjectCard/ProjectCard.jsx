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
      <a
        className={
          isDarkMode ? "project-info dark-info" : "project-info light-info"
        }
        href={Object.values(project.links)[0]}
      >
        <div className="project-text">
          <div className="project-title">
            <h3>{project.title}</h3>
            {/* Links */}
            {project.links.codeRepo && <div>View Code</div>}
            {project.links.website && <div>View Website</div>}
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
      </a>
    </Tilt>
  );
};

export default ProjectCard;
