import { useContext } from "react";
import { ProjectCard } from "./components";
import { SplineCanvas } from "../";
import { ThemeContext } from "../../contexts/ThemeContext";

import projects from "../../data/projects.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Projects.scss";

const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="Projects" className="projects-section">
      <SplineCanvas
        attributes={{
          className: "projects-background",
          scene: "https://prod.spline.design/mM14Iwyb5fmtifQc/scene.splinecode",
        }}
      />
      <div className="projects-container">
        <h1 className={isDarkMode ? "dark-mode-title" : "light-mode-title"}>
          Projects
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
