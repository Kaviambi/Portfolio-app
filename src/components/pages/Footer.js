import React from "react";
import Github from "./images/github.png";
import Linkedin from "./images/linkedin.png";
import stack from "./images/stack.png";

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

            <a href="https://www.linkedin.com/in/kavitha-ambigapathi-03468078/"
            target='_blank'
            rel="noreferrer"
            >
              <img src={Linkedin}
              alt="githublogo"
              className="logo"></img>
            </a>

            <a href="https://stackoverflow.com/"
            target='_blank'
            rel="noreferrer"
            >
              <img src={stack}
              alt="githublogo"
              className="logo"></img>
            </a>
        </footer>
    );
};

export default Footer;