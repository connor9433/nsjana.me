import React from "react";
import TrackVisibility from "react-on-screen";
import Funfact from "../Items/Funfact";

const funfactData = [
  {
    id: 1,
    title: "Projects completed",
    count: 20,
    icon: "icon-like",
  },
  {
    id: 2,
    title: "Cup of coffee",
    count: 20,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Happy customers",
    count: 18,
    icon: "icon-emotsmile",
  },
  {
    id: 4,
    title: "Certificates",
    count: 5,
    icon: "icon-trophy",
  },
];

function Funfacts() {
  return (
    <section className="shadow-dark color-white background parallax padding-50">
      <div className="row relative z-1 -mt-50">
        {funfactData.map((funfact) => (
          <div className="col-md-3 col-sm-6 mt-50" key={funfact.id}>
            <TrackVisibility once>
              <Funfact funfact={funfact} />
            </TrackVisibility>
          </div>
        ))}
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Funfacts;
