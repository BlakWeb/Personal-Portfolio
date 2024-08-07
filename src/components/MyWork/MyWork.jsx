import React from "react";
import "./MyWork.css";
import logo from "../../assets/logo.jpeg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.png";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Projects</h1>
        <img src={logo} alt="Logo" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index}>
            <h3>{work.w_name}</h3>
            <img src={work.w_img} alt={work.w_name} />
          </div>
        ))}
      </div>
      <div className="mywork-exploremore">
        <p>Explore More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default MyWork;
