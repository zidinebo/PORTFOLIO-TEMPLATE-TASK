import React, { useState } from "react";
import { Link } from "react-scroll";
import navLogo from "../images/navlogo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav id="nav" className={`nav_bar ${isMenuOpen ? "active" : ""}`}>
        <Link to="foot" smooth={true} duration={500} className="nav_one">
          <img src={navLogo} alt="BlissDevLogod" />
          <h4>BlissDev.</h4>
        </Link>

        <div class="hamburger" onClick={toggleMenu}>
          <p className={`bar1 bar ${isMenuOpen ? "active" : ""}`}></p>
          <p className={`bar2 bar ${isMenuOpen ? "active" : ""}`}></p>
          <p className={`bar3 bar ${isMenuOpen ? "active" : ""}`}></p>
          <p className={`bar4 bar ${isMenuOpen ? "active" : ""}`}></p>
        </div>

        <div className={`nav_inn ${isMenuOpen ? "show" : ""}`}>
          <Link to="head" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
          <Link to="about" smooth={true} duration={500}>
            About me
          </Link>
          <Link to="testimonials" smooth={true} duration={500}>
            Testimonials
          </Link>
        </div>

        <Link to="contact" smooth={true} duration={500} className="nav_las">
          <button>Contact me</button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
