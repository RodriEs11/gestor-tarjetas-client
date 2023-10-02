import React from "react";
import "./Footer.css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

function Footer() {

    const githubUrl = "https://www.linkedin.com/in/rodrigoespindola11/";
    const linkedinUrl = "https://www.linkedin.com/in/rodrigoespindola11/";

    return (
        <footer className="footer">
            <div className="footer-container">
                <h1>Rodrigo Espíndola </h1>

                <div className="iconos">
                    <IoLogoGithub className="icono" size={30} title="GitHub"></IoLogoGithub>
                    <IoLogoLinkedin className="icono" size={30} title="LinkedIn"></IoLogoLinkedin>
                </div>

                <p>2023</p>
            </div>
        </footer>

    );

}

export default Footer;