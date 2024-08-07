import React, { useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";
import underline from "../../assets/underline.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-380px";
  }

  return (
    <div className="navbar">
      <AnchorLink href="#home" onClick={() => setMenu("home")}>
        <img src={logo} alt="Logo" />
      </AnchorLink>
      <FontAwesomeIcon icon={faBars} onClick={openMenu} className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <FontAwesomeIcon icon={faXmark} onClick={closeMenu} className="nav-mob-close" />
        <li className={menu === "home" ? "active" : ""}>
          <AnchorLink className="anchor-link" href="#home" onClick={() => setMenu("home")}>
            <p>Home</p>
            {menu === "home" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#about" onClick={() => setMenu("about")}>
            <p>About Me</p>
            {menu === "about" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
        <li className={menu === "services" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#services" onClick={() => setMenu("services")}>
            <p>My Services</p>
            {menu === "services" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
        <li className={menu === "work" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#work" onClick={() => setMenu("work")}>
            <p>Portfolio</p>
            {menu === "work" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
        <li className={menu === "contact" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => setMenu("contact")}>
            <p>Contact Me</p>
            {menu === "contact" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        <a href="https://github.com/BlakWeb">Check my repository</a>
      </div>
    </div>
  );
};

export default Navbar;
