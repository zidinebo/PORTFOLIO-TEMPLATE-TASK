import React from "react";
import navLogo from "../images/navlogo.png";
import { Link } from "react-scroll";
import facebook from "../images/Facebook.png";
import instagram from "../images/Instagram.png";
import twitter from "../images/Twitter.png";
import linkedin from "../images/LinkedIn.png";

const Footer = () => {
  return (
    <div>
      <footer id="foot" className="footerking">
        <div className="footerup">
          <Link to="nav" smooth={true} duration={500} className="nav_one">
            <img src={navLogo} alt="" />
            <h4>BlissDev.</h4>
          </Link>

          <div className="footermid">
            <Link to="head">Home</Link>
            <Link to="portfolio">Portfolio</Link>
            <Link to="about">About me</Link>
            <Link to="contact">Contact</Link>
            <Link to="testimonials">Testimonials</Link>
            <Link to="portfolio">Portfolio</Link>
          </div>

          <div className="footlast">
            <a
              href="https://www.facebook.com/ngozi.adinebo?mibextid=ZbWKwL"
              target="blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              href="https://x.com/zidinebo?t=hUSkCL63g4oXRDHYF1f8Gw&s=08"
              target="blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="" />
            </a>
            <a
              href="https://www.instagram.com/zidinebo/?locale=ne_NP&hl=ar"
              target="blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="" />
            </a>
            <a
              href="https://ng.linkedin.com/in/blessing-adinebo-5a3622184"
              target="blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>

        <hr />

        <div className="footerdown">
          <div>
            <p>Made with 💖 by Bliss</p>
          </div>
          <div className="ftdown">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies Settings</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
