import React from "react";

import { IoSchool as SchoolIcon } from "react-icons/io5";
import { MdWork as WorkIcon } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import timelineElements from "../../data/timeline.json";

import "./Timeline.scss";

const Timeline = () => {
  let workIconStyle = { background: "#f0aaf0", color: "#000000" };
  let schoolIconStyle = { background: "#aaf0f0", color: "#000000" };
  return (
    <div id="Timeline">
      <h1>Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
            >
              <h3 className="verticle-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="verticle-timeline-element-subtitle">
                {element.location}
              </h5>
              <p className="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
