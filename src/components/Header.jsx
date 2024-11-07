import React from "react";
import headerimg from "../images/header img.png";

const Header = () => {
  return (
    <div>
      <header>
        <div id="head" className="header_left">
          <h4>Hey, I am Bliss</h4>
          <h1>I develop dynamic and User-Centered Web Applications</h1>
          <p>
            My expertise spans both front-end and back-end development, enabling
            me to build comprehensive solutions that meet diverse client needs.
          </p>
          <div className="header_but">
            <button>Get in touch</button>
          </div>
        </div>
        <div className="img_one">
          <img src={headerimg} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
