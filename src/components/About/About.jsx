import React from "react";
import "./About.css";
import profile_img from "../../assets/profile 2.jpeg";
import logo from "../../assets/logo.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={logo} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a skilled front end developer with three years of experience
              in creating user-friendly, responsive websites.
            </p>
            <p>
              A goal-oriented Frontend Developer with knowledge of HTML, CSS,
              JavaScript, React, Nextjs, Tailwind and Typescript seeking to use
              technical proficiency and creativity to develop engaging user
              experiences and advance in a professional career.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="about-skill">
              <p>Typescript</p>
              <hr style={{ width: "49%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind</p>
              <hr style={{ width: "53%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
