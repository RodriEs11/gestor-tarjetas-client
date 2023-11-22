import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"
import { Container } from "reactstrap";
import Reloj from "../RelojComponent";


function Footer() {

  
    const githubUrl = "https://github.com/RodriEs11";
    const linkedinUrl = "https://www.linkedin.com/in/rodrigoespindola11/";

    return (

        <footer className="mt-auto stycky-bottom py-3">
            <Container fluid className="bg-light stycky-bottom py-5 d-flex flex-column align-items-center">


                <h1>Rodrigo Espíndola </h1>
                <div className="text-center ">
                    <IoLogoGithub className="m-2" size={30} title="GitHub" onClick={() => { window.open(githubUrl) }} cursor={"pointer"}></IoLogoGithub>
                    <IoLogoLinkedin className="m-2" size={30} title="LinkedIn" onClick={() => { window.open(linkedinUrl) }} cursor={"pointer"}></IoLogoLinkedin>
                </div>
                <p className="my-4">Hora del servidor </p>
                <Reloj></Reloj>
            </Container>

        </footer>

    );

}

export default Footer;