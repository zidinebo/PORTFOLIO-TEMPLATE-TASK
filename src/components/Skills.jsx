import React from "react";
import skillone from "../images/skilloneimg.png";
import skilltwo from "../images/skilltwoimg.png";
import skilltie from "../images/skilltieimg.png";
import skillfor from "../images/skillforimg.png";

const Skills = () => {
  return (
    <div id="home" className="skills">
      <div className="skill_sec1">
        <h5>My Skills</h5>
        <h2>My Expertise</h2>
      </div>

      <div className="skill_sec2">
        <div className="skillgrid">
          <img src={skillone} alt="" />
          <h3>Responsive Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <div className="skillgrid">
          <img src={skilltwo} alt="" />
          <h3>Front-End Frameworks</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <div className="skillgrid">
          <img src={skilltie} alt="" />
          <h3>Testing and Debugging</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <div className="skillgrid">
          <img src={skillfor} alt="" />
          <h3>Cloud Services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
