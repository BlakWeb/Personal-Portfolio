import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import profile_img from "../../assets/profile 2.jpeg";

const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={profile_img} alt="Profile" />
            <h1>
                <span>I'm Oshala Jacob Yahaya,</span> frontend web developer based in Nigeria.
      </h1>
            <p>
                I am a passionate front-end web developer from Nasarawa State, Nigeria
                with 1+ years of expertise in web development.
      </p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink>
                </div>
                <div className="hero-resume">
                    <a href="https://drive.google.com/file/d/1uvXI8oA00wqzNpzxS-buAjti69YfPHTg/view?fbclid=IwY2xjawEjiHRleHRuA2FlbQIxMQABHefHaDIa7AkD19EgzkTlZeQ_7fPm27l0nKSpBorN1TwfsIp2ZIvt3D5rrA_aem_e-h-2pF6q3fJkbMszhw5xA"> Check my resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
