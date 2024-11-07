import React from "react";
import { Link } from "react-scroll";
import gitlogo from "../images/gitlogo.png";
import extracto from "../images/house1.png";
import extractt from "../images/extract 2.png";
import extractla from "../images/laptop3.png";
import arrow from "../images/Vector.png";
import arrowgreen from "../images/Vector2.png";

const RecentProject = () => {
  return (
    <div>
      <div id="portfolio" className="recentPro">
        <div className="up_recent">
          <div>
            <h5>Recent Projects</h5>
            <h3>My Portfolio</h3>
          </div>
          <a
            href="https://github.com/zidinebo"
            className="gitlink"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src={gitlogo} alt="githublogo" />
            <p>Visit My GitHub</p>
          </a>
        </div>

        <div className="low_recent">
          <div className="lowrd">
            <img src={extracto} alt="" className="extract" />
            <h5>Ahuse</h5>
            <p className="plo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <a
              href="https://word-generator-app.vercel.app/"
              target="blank"
              rel="noopener noreferrer"
              className="port_a"
            >
              <p>View Website</p>
              <img src={arrow} alt="" />
            </a>
          </div>
          <div className="lowrd">
            <img src={extractt} alt="" className="extract" />
            <h5>App Dashboard</h5>
            <p className="plo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <a
              href="https://github.com/zidinebo"
              target="blank"
              rel="noopener noreferrer"
              className="port_a"
            >
              <p>View Project</p>
              <img src={arrowgreen} alt="" />
            </a>
          </div>

          <div className="lowrd">
            <img src={extractla} alt="" className="extract" />
            <h5>Easy Rent</h5>
            <p className="plo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <a
              href="https://word-generator-app.vercel.app/"
              target="blank"
              rel="noopener noreferrer"
              className="port_a"
            >
              <p>View Website</p>
              <img src={arrowgreen} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProject;
