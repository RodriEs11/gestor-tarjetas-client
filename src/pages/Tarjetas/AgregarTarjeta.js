import React from 'react'

import Header from "../../components/Header/HeaderComponent";
import Footer from "../../components/Footer/FooterComponent";
import AgregarTarjetaForm from '../../components/Forms/AgregarTarjetaForm';

const AgregarTarjeta = () => {
  return (

    <div className="d-flex flex-column">

      <Header />

      <main>

        <AgregarTarjetaForm></AgregarTarjetaForm>

      </main>

      <Footer />

    </div>
  )
}

export default AgregarTarjeta

