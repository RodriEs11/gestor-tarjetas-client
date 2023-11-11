import React from "react";
import Header from "../../components/Header/HeaderComponent";
import Footer from "../../components/Footer/FooterComponent";
import AgregarConsumoForm from "../../components/Forms/AgregarConsumoForm";


function AgregarConsumo() {
  return (
    <div className="d-flex flex-column">

      <Header />

      <main>


        <AgregarConsumoForm></AgregarConsumoForm>


      </main>

      <Footer />

    </div>
  );
}

export default AgregarConsumo;
