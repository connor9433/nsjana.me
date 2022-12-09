import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2014 - Present",
    degree: "Co-Founder ",
    content:
      "GizDev.Com",
  },
  {
    id: 2,
    year: "2019 - Present",
    degree: "Founder",
    content:
      "Devdrive.cloud",
  },
  {
    id: 3,
    year: "2018-2020",
    degree: "Co-Founder",
    content:
      "GeekyWeb",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
