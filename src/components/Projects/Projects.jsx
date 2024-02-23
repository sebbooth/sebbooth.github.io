import React, { useEffect, useState } from "react";

import { ProjectCard } from "./components";
import "./Projects.scss";

import data from "../../data/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <section className="projects-section">
      {/* ... other layout elements */}
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
