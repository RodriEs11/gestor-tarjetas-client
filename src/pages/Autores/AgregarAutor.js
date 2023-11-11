import React from "react";
import Header from "../../components/Header/HeaderComponent";
import Footer from "../../components/Footer/FooterComponent";
import AgregarAutorForm from "../../components/Forms/AgregarAutorForm";


function AgregarAutor() {
  return (
    <div className="d-flex flex-column">

      <Header />

      <main>

      <AgregarAutorForm></AgregarAutorForm>

      </main>

      <Footer />

    </div>
  );
}

export default AgregarAutor;
