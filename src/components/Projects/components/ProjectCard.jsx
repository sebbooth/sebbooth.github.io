import React from "react";
import "./ProjectCard.scss"; // Assuming you have separate styles

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {/* Image Handling */}
      <div className="project-image-container">
        <img
          src={`/assets/images/projects/${project.images[0]}`}
          alt={project.title}
          className="project-image"
        />
      </div>

      <div className="project-info">
        <div className="project-text">
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
    </div>
  );
};

export default ProjectCard;
