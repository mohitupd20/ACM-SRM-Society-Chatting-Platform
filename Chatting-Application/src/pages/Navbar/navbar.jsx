import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import assets from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar-desktop">
        {/* Logo and Text */}
        <div className="logo-container">
          <img
            src={assets.srm_logo}
            alt="Codenex"
            className="logo-image"
            width={58}
            height={58}
          />
          <div className="logo-text">ACM Student Chapter</div>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a
            onClick={() => navigate("/about")}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            About
          </a>
          <a
            onClick={() => navigate("/leads")}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            Team
          </a>
          <a
            onClick={() => navigate("/Event")}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            Events
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="mobile-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className={`navbar-mobile ${isOpen ? "open" : ""}`}>
        <div className="mobile-nav-links">
          <a
            onClick={() => {
              navigate("/about");
              toggleMenu();
            }}
            className="nav-link"
          >
            About
          </a>
          <a
            onClick={() => {
              navigate("/leads");
              toggleMenu();
            }}
            className="nav-link"
          >
            Team
          </a>
          <a
            onClick={() => {
              navigate("/Event");
              toggleMenu();
            }}
            className="nav-link"
          >
            Events
          </a>
          <a href="/contact" className="nav-link" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
