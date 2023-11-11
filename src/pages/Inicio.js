import React from "react";
import Header from "../components/Header/HeaderComponent";
import Footer from "../components/Footer/FooterComponent";
import Main from "../components/Main/MainComponent";
import { Button, Container } from "reactstrap";

function Index() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Header />

      <main className="flex-grow-1 d-flex justify-content-center align-items-center bg-dark">

        <Container className="py-5 d-flex justify-content-center flex-column align-items-center text-light text-center m-2">
          <h1 className="display-1">Página principal</h1>
          <p className="fs-3">En esta aplicación podrás ver toda la información sobre tus tarjetas de crédito</p>
          <Button color="info" size="lg">Ver más</Button>
        </Container>

      </main>

      <Footer />

    </div>
  );
}

export default Index;
