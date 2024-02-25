import React from "react";

import { IoSchool as SchoolIcon } from "react-icons/io5";
import { MdWork as WorkIcon } from "react-icons/md";
import { RiComputerLine as SoftwareIcon } from "react-icons/ri";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import timelineElements from "../../data/timeline.json";

import "./Timeline.scss";

const Timeline = () => {
  let workIconStyle = { background: "#107710", color: "#000000" };
  let schoolIconStyle = { background: "#f04444", color: "#000000" };
  let softwareIconStyle = { background: "#a0a0f0", color: "#000000" };

  return (
    <div id="Timeline">
      <div className="spacer" />
      <h1>Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              className={element.icon}
              key={element.id}
              date={element.date}
              dateClassName="date"
              icon={
                element.icon == "work" ? (
                  <WorkIcon />
                ) : element.icon == "school" ? (
                  <SchoolIcon />
                ) : (
                  <SoftwareIcon />
                )
              }
              iconStyle={
                element.icon == "work"
                  ? workIconStyle
                  : element.icon == "school"
                  ? schoolIconStyle
                  : softwareIconStyle
              }
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
