import React, { useEffect, useState } from "react";

import Header from "../../components/Header/HeaderComponent";
import Footer from "../../components/Footer/FooterComponent";
import Consumo from "../../components/Consumo/ConsumoComponent";
import Tarjeta from "../../components/Tarjeta/TarjetaComponent";
import TarjetaSelector from "../../components/Tarjeta/LEGACYTarjetaSelectorComponent";

import {
  fetchConsumos,
  fetchConsumosByIdTarjeta,
} from "../../api/ConsumoAPI";
import {
  fetchTarjetas,
  fetchTarjetaById,
} from "../../api/TarjetaAPI";
import { fetchAutores } from "../../api/AutorAPI";

function IndexConsumo() {
  const [consumos, setConsumos] = useState([]);
  const [autores, setAutores] = useState();
  const [idTarjeta, setIdTarjeta] = useState();
  const [tarjeta, setTarjeta] = useState([]);

  useEffect(() => {
    fetchAutores()
      .then((response) => {
        setAutores(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setIdTarjeta(1);
  }, []);

  const handleSeleccionTarjeta = (event) => {
    setIdTarjeta(event.target.value);
  };

  useEffect(() => {
    // Llama a fetchTarjetaById solo si idTarjeta no está vacio
    if (idTarjeta) {
      fetchTarjetaById(idTarjeta)
        .then((response) => {
          setTarjeta(response);
        })
        .catch((error) => {
          console.log(error);
        });

      fetchConsumosByIdTarjeta(idTarjeta)
        .then((response) => {
          setConsumos(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [idTarjeta]);

  const tarjetaTemp = {
    nombre: "CARGANDO...",
    limiteActual: 0,
    limiteDisponible: 0,
    cierreAnterior: "2000-01-01",
    cierreActual: "2000-01-01",
    vencimientoAnterior: "2000-01-01",
    vencimientoActual: "2000-01-01",
    totalVencimientoAnterior: 0,
    totalVencimientoActual: 0,
  };

  let autorTemp = [
    {
      idAutor: 0,
      nombre: "Vacio",
    },
    {
      idAutor: 1,
      nombre: "Vacio",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <TarjetaSelector
          handleSeleccionTarjeta={handleSeleccionTarjeta}
        ></TarjetaSelector>

        <Tarjeta
          tarjetaObjeto={tarjeta?.length > 0 ? tarjeta[0] : tarjetaTemp}
          autores={autores?.length > 0 ? autores : [{ idAutor: 0, nombre: "Cargando..." }]}
        ></Tarjeta>

        <div className="container-consumos">
          {consumos.map((consumo, id) => {
            return <Consumo key={id} consumoObjeto={consumo}></Consumo>;
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default IndexConsumo;
