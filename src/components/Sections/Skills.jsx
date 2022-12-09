import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "I started my journey with Google Blogger, Opened my Tech blog in 2014 with WordPress, and continue learning WordPress Development. Created personal, business and eCommerce websites for many clients and now started the journey in Android flutter",
  progressData: [
    {
      id: 1,
      name: "Wordpress",
      percentage: 90,
    },
    {
      id: 2,
      name: "SEO",
      percentage: 90,
    },
    {
      id: 3,
      name: "Content Creation",
      percentage: 90,
    },
    {
      id: 4,
      name: "Graphics",
      percentage: 70,
    },
    {
      id: 5,
      name: "VPS",
      percentage: 80,
    },
    {
      id: 6,
      name: "React & Flutter",
      percentage: 70,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
