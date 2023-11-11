import React, { useState, useEffect } from "react";
import { Container, Card, CardBody, CardHeader, CardTitle, Input, CardSubtitle, Label, List, ListGroupItem } from "reactstrap";


import { fetchTotalPagarByAutorAndTarjeta } from "../../api/AutorAPI";

function Tarjeta(props) {

  /*
  const [totalPagar, setTotalPagar] = useState(0);
  const [idAutorSelected, setIdAutorSelected] = useState();
  const [idTarjetaHook, setIdTarjeta] = useState();

  const objetoTarjeta = props.tarjetaObjeto;
  const autores = props.autores;

  const idTarjeta = objetoTarjeta.idTarjeta;
  const nombre = objetoTarjeta.nombre;
  const limiteActual = objetoTarjeta.limiteActual;
  const limiteDisponible = objetoTarjeta.limiteDisponible;
  const cierreAnterior = new Date(objetoTarjeta.cierreAnterior).toLocaleDateString();
  const cierreActual = new Date(objetoTarjeta.cierreActual).toLocaleDateString();
  const vencimientoAnterior = new Date(objetoTarjeta.vencimientoAnterior).toLocaleDateString();
  const vencimientoActual = new Date(objetoTarjeta.vencimientoActual).toLocaleDateString();
  const totalVencimientoAnterior = objetoTarjeta.totalVencimientoAnterior;
  const totalVencimientoActual = objetoTarjeta.totalVencimientoActual;


  useEffect(() => {
    setIdTarjeta(idTarjeta);
    if (idAutorSelected && idTarjetaHook) {
      fetchTotalPagarByAutorAndTarjeta(idAutorSelected, idTarjetaHook)
        .then((response) => {
          setTotalPagar(response);
        })
        .catch((error) => {
          console.log(error);
        });


    } else {
    }
  }, [idTarjetaHook, idAutorSelected]);

  const handleSeleccionAutor = (event) => {
    setIdAutorSelected(event.target.value);
  };
*/
  return (



    <Card body className="my-4">

      <CardHeader>
        <CardTitle tag={"h1"} className="text-center">VISA</CardTitle>
      </CardHeader>

      <CardBody className="d-flex justify-content-center align-items-center">
        <Input type="select" className="text-center" style={{ maxWidth: "45%" }}>
          <option>Visa</option>
          <option>Mastercard</option>
        </Input>
      </CardBody>

      <Container className="d-flex flex-wrap justify-content-center align-items-center">

        <Card body className="align-items-center m-2">
          <CardTitle tag={"h1"} className="text-center">A pagar</CardTitle>
          <CardSubtitle tag={"h2"} >$50.000</CardSubtitle>

          <CardTitle tag={"h2"} className="text-center m-2">Vencimiento</CardTitle>
          <CardSubtitle tag={"h3"} >24/11/23</CardSubtitle>
        </Card>


      </Container>

      <Container className="d-flex flex-wrap justify-content-center align-items-center">

        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Límite Total</CardTitle>
            <CardSubtitle tag={"h4"} >$820.000</CardSubtitle>
          </Card>
        </Container>


        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Límite disponible</CardTitle>
            <CardSubtitle tag={"h4"} >$120.000</CardSubtitle>
          </Card>
        </Container>

        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Último cierre</CardTitle>
            <CardSubtitle tag={"h4"} >12/10/23</CardSubtitle>
          </Card>
        </Container>




        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Próximo cierre</CardTitle>
            <CardSubtitle tag={"h4"} >24/11/23</CardSubtitle>
          </Card>
        </Container>

        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Próximo vencimiento</CardTitle>
            <CardSubtitle tag={"h4"} >24/11/23</CardSubtitle>
          </Card>
        </Container>



      </Container>


      <CardBody className="d-flex flex-column justify-content-center align-items-center text-center">
        <Label for="autor">Seleccione el autor para ver sus consumos</Label>
        <Input type="select" className="text-center my-3" name="autor" style={{ maxWidth: "80%" }}>
          <option>Rodrigo</option>
          <option>Luna</option>
          <option>Emanuel</option>
        </Input>

        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardHeader>
              <CardTitle tag={"h5"} style={{ lineHeight: "1.8em" }}>
                A pagar por <span>Rodrigo</span>
              </CardTitle>
            </CardHeader>
            <CardBody>

              <CardSubtitle tag={"h2"} className="py-2">$25.000</CardSubtitle>
            </CardBody>

          </Card>
        </Container>

      </CardBody>

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