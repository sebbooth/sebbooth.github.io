import React, { useEffect, useState } from "react";
import { ProjectCard } from "./components";
import { SplineCanvas } from "../";

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
    <section id="Projects" className="projects-section">
      <SplineCanvas
        attributes={{
          className: "projects-background",
          scene: "https://prod.spline.design/mM14Iwyb5fmtifQc/scene.splinecode",
        }}
      />
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
