import React from "react";
import Github from "./images/github.png";
import Linkedin from "./images/linkedin.png";

const Footer = () => {
    return (
        <footer className="footer" >
            <a href="https://github.com/Kaviambi"
            target='_blank'
            rel="noreferrer"
            >
              <img src={Github}
              alt="githublogo"
              className="logo"></img>
            </a>

            <a href="https://github.com/Kaviambi"
            target='_blank'
            rel="noreferrer"
            >
              <img src={Linkedin}
              alt="githublogo"
              className="logo"></img>
            </a>


        </footer>
    );
};

export default Footer;