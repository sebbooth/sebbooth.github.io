import React, { useEffect, useState, lazy, Suspense } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));
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
    <section id="Projects" className="projects-section">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          className="projects-background"
          scene="https://prod.spline.design/mM14Iwyb5fmtifQc/scene.splinecode"
        />
      </Suspense>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
