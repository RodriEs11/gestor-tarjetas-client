import React, { useState, useEffect } from "react";
import { Container, Card, CardBody, CardHeader, CardTitle, Input, CardSubtitle, Label, List, ListGroupItem } from "reactstrap";


import { fetchTarjetas } from "../../api/TarjetaAPI";
import { fetchAutores } from "../../api/AutorAPI";

function Tarjeta(props) {

    const nombre = props.nombre;
    const pagar = parseInt(props.pagar);
    const vencimiento = props.vencimiento;
    const limiteTotal = parseInt(props.limiteTotal);
    const limiteDisponible = parseInt(props.limiteDisponible);
    const ultimoCierre = props.ultimoCierre;
    const proximoCierre = props.proximoCierre;
    const proximoVencimiento = props.proximoVencimiento;


  return (



    <Card body className="my-4">

      <CardHeader>
        <CardTitle tag={"h1"} className="text-center">{nombre}</CardTitle>
      </CardHeader>

      <CardBody className="d-flex justify-content-center align-items-center">



      </CardBody>

      <Container className="d-flex flex-wrap justify-content-center align-items-center">

        <Card body className="align-items-center m-2">

          <CardTitle tag={"h1"} className="text-center">A pagar</CardTitle>

          <CardSubtitle tag={"h3"} >${pagar.toLocaleString()}</CardSubtitle>

          <CardTitle tag={"h2"} className="text-center m-2">Vencimiento</CardTitle>

          <CardSubtitle tag={"h3"} >{vencimiento}</CardSubtitle>


        </Card>


      </Container>

      <Container className="d-flex flex-wrap justify-content-center align-items-center">

        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Límite Total</CardTitle>

            <CardSubtitle tag={"h3"}>${limiteTotal.toLocaleString()}</CardSubtitle>


          </Card>
        </Container>


        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Límite disponible</CardTitle>

            <CardSubtitle tag={"h3"}>${limiteDisponible.toLocaleString()}</CardSubtitle>
          </Card>
        </Container>

        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Último cierre</CardTitle>

            <CardSubtitle tag={"h3"}>{ultimoCierre}</CardSubtitle>

          </Card>
        </Container>




        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Próximo cierre</CardTitle>
            <CardSubtitle tag={"h3"}>{proximoCierre}</CardSubtitle>
          </Card>
        </Container>

        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Próximo vencimiento</CardTitle>
            <CardSubtitle tag={"h3"}>{proximoVencimiento}</CardSubtitle>
          </Card>
        </Container>



      </Container>


      

    </Card >







  );
}

export default Tarjeta;


/*
  <div className="tarjeta-container">
      <div className="tarjeta-nombre">
        <h1>{nombre}</h1>
        <p>Detalles y consumos de la tarjeta de crédito</p>
      </div>

      <div className="items-container">
        <div className="tarjeta-item">
          <h2>A pagar</h2>
          <h1>${totalVencimientoActual}</h1>
        </div>
        <div className="tarjeta-item">
          <h2>Límite actual</h2>
          <h1>${limiteActual}</h1>
        </div>
        <div className="tarjeta-item">
          <h2>Límite disponible</h2>
          <h1>${limiteDisponible}</h1>
        </div>
        <div className="tarjeta-item">
          <h2>Cierre anterior</h2>
          <h1>{cierreAnterior}</h1>
        </div>
        <div className="tarjeta-item">
          <h2>Cierre actual</h2>
          <h1>{cierreActual}</h1>
        </div>
        <div className="tarjeta-item">
          <h2>Vencimiento anterior</h2>
          <h1>{vencimientoAnterior}</h1>
        </div>
        <div className="tarjeta-item">
          <h2>Vencimiento actual</h2>
          <h1>{vencimientoActual}</h1>
        </div>
        <div className="tarjeta-item">
          <h2>A pagar por</h2>
          <select onChange={handleSeleccionAutor}>
            {autores.map((autor, id) => {
              return (
                <option key={id} value={autor.idAutor} >
                  {autor.nombre}
                </option>
              );
            })}
          </select>

          <h1>${totalPagar[0]?.totalPagar != null ? totalPagar[0].totalPagar.toFixed(2) : 0}
          </h1>
        </div>
      </div>
    </div>
*/