import React from "react";
import Header from "../../components/Header/HeaderComponent";
import Footer from "../../components/Footer/FooterComponent";
import Consumo from "../../components/Consumo/ConsumoComponent";

import { Container, Card, CardBody, CardHeader, CardTitle, Input, CardSubtitle, Label } from "reactstrap";
import Tarjeta from "../../components/Tarjeta/TarjetaComponent";


function VerConsumos() {
    return (
        <div className="d-flex flex-column">

            <Header />

            <main className="d-flex flex-column" style={{backgroundColor:"#fff"}}>

                <Container className="d-flex flex-wrap justify-content-center align-items-center m-0 p-0">

                    <Tarjeta></Tarjeta>


                </Container>



                <Container className="d-flex flex-wrap justify-content-center align-items-center m-0 p-0">

                    <Consumo></Consumo>
                    <Consumo></Consumo>
                    <Consumo></Consumo>
                    <Consumo></Consumo>
                    <Consumo></Consumo>
                </Container>



            </main>

            <Footer />

        </div>
    );
}

export default VerConsumos;
