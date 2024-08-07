import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import profile_img from "../../assets/profile 2.jpeg";

const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={profile_img} alt="Profile" />
            <h1>
                <span>I'm Jacob O. Yahaya,</span> frontend web developer based in Nigeria
      </h1>
            <p>
                I am a passionate front-end web developer from Nasarawa State, Nigeria
                with 3 years of expertise in web development.
      </p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink>
                </div>
                <div className="hero-resume">
                    <a href="https://drive.google.com/file/d/1HOkahwCsz0jtGrkimwjAGf2WjuAWPCnU/view?fbclid=IwY2xjawEc3gRleHRuA2FlbQIxMAABHT8zV9tAqHGkRPEMQrSh3SfRSCrvXrI4E_MflpBvc9lPsFndaEqjjWbrmQ_aem_gnMD_H2_yI6soZEAJQKh3w"> Check my resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
