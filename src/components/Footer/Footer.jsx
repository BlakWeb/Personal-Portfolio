import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.jpeg";
import user_icon from "../../assets/user-icon.png";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            I am a front-end web developer from Nigeria with 3 years of
            experienced.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="footer-subscribe">
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          <div className="social-links">
            <a
              href="https://www.facebook.com/jacob.oshalayahaya"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/oshjahoshyahosh"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://github.com/BlakWeb" className="github social">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://wa.link/6tunfm" className="whatsapp social">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
          <span>&copy; 2024</span> Jacob Oshala Yahaya. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
