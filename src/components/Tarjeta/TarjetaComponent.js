import React, { useState, useEffect } from "react";
import { Container, Card, CardBody, CardHeader, CardTitle, Input, CardSubtitle, Label, List, ListGroupItem } from "reactstrap";


import { fetchTarjetas } from "../../api/TarjetaAPI";
import { fetchAutores } from "../../api/AutorAPI";

function Tarjeta(props) {

  const [tarjetas, setTarjetas] = useState([]);
  const [autores, setAutores] = useState([]);


  const [tarjetaIdSeleccionada, setTarjetaIdSeleccionada] = useState(null);
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);


  const [autorIdSeleccionado, setAutorIdSeleccionado] = useState(null);
  const [autorSeleccionado, setAutorSeleccionado] = useState(null);

  const [cargandoTarjetas, setCargandoTarjetas] = useState(true);
  const [cargandoAutores, setcargandoAutores] = useState(true);



  useEffect(() => {

    fetchTarjetas().then((tarjetas) => {

      setTarjetas(tarjetas)
      setTarjetaSeleccionada(tarjetas[0]);
      setCargandoTarjetas(false);

    }).catch((error) => {

      console.log(error);

    });

    fetchAutores().then((autores) => {

      setAutores(autores)
      setAutorSeleccionado(autores[0]);
      setcargandoAutores(false);

    }).catch((error) => {

      console.log(error);

    });



  }, [])

  const handleSelectTarjeta = (event) => {
    const idSeleccionado = parseInt(event.target.value, 10);
    setTarjetaSeleccionada(idSeleccionado);

    // Buscar la tarjeta correspondiente en el array de tarjetas
    const tarjeta = tarjetas.find((t) => t.idTarjeta === idSeleccionado);
    setTarjetaSeleccionada(tarjeta);
  };

  const handleSelectAutor = (event) => {
    const idSeleccionadoAutor = parseInt(event.target.value, 10);
    setAutorIdSeleccionado(idSeleccionadoAutor);

    const autor = autores.find((a) => a.idAutor === idSeleccionadoAutor);
    //MODIFICAR LUEGO
    const autorConNuevosCampos = {...autor, totalAPagar:20000};
    setAutorSeleccionado(autorConNuevosCampos);
  }


  function formatearFecha(fechaCompleta) {

    let fecha = new Date(fechaCompleta);

    let dia = fecha.getUTCDate();
    let mes = fecha.getUTCMonth() + 1; // Los meses comienzan desde 0
    let anio = fecha.getUTCFullYear();

    dia = (dia < 10) ? '0' + dia : dia;
    mes = (mes < 10) ? '0' + mes : mes;

    var fechaFormateada = dia + '/' + mes + '/' + anio;

    return fechaFormateada
  }



  return (



    <Card body className="my-4">

      <CardHeader>
        {cargandoTarjetas ? (
          <CardTitle tag={"h1"} className="text-center">Cargando...</CardTitle>
        ) : (
          <>
            <CardTitle tag={"h1"} className="text-center">{tarjetaSeleccionada.nombre}</CardTitle>
          </>
        )
        }


      </CardHeader>

      <CardBody className="d-flex justify-content-center align-items-center">


        <Input type="select" className="text-center" style={{ maxWidth: "45%" }} onChange={handleSelectTarjeta}>
          <option value="">Selecciona una tarjeta</option>
          {cargandoTarjetas ? (
            <option value="" disabled>Cargando tarjetas...</option>
          ) : (
            <>

              {tarjetas.map((tarjeta, id) => {
                return (
                  <option key={id} value={tarjeta.idTarjeta}>{tarjeta.nombre}</option>
                )
              })}
            </>
          )
          }


        </Input>


      </CardBody>

      <Container className="d-flex flex-wrap justify-content-center align-items-center">

        <Card body className="align-items-center m-2">
          <CardTitle tag={"h1"} className="text-center">A pagar</CardTitle>

          {cargandoTarjetas ?
            (
              <>
                <CardSubtitle tag={"h3"} >Cargando...</CardSubtitle>
              </>
            ) :
            (
              <>
                <CardSubtitle tag={"h3"} >${tarjetaSeleccionada.limiteTotal}</CardSubtitle>
              </>
            )}


          <CardTitle tag={"h2"} className="text-center m-2">Vencimiento</CardTitle>

          {cargandoTarjetas ?
            (
              <>
                <CardSubtitle tag={"h3"} >Cargando...</CardSubtitle>
              </>
            ) :
            (
              <>
                <CardSubtitle tag={"h3"} >{formatearFecha(tarjetaSeleccionada.vencimiento)}</CardSubtitle>
              </>
            )}


        </Card>


      </Container>

      <Container className="d-flex flex-wrap justify-content-center align-items-center">

        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Límite Total</CardTitle>

            {cargandoTarjetas ?
              (
                <>
                  <CardSubtitle tag={"h3"} >Cargando...</CardSubtitle>
                </>
              ) :
              (
                <>
                  <CardSubtitle tag={"h3"}>${tarjetaSeleccionada.limiteTotal.toLocaleString()}</CardSubtitle>
                </>
              )}


          </Card>
        </Container>


        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Límite disponible</CardTitle>

            {cargandoTarjetas ?
              (
                <>
                  <CardSubtitle tag={"h3"} >Cargando...</CardSubtitle>
                </>
              ) :
              (
                <>
                  <CardSubtitle tag={"h3"}>${tarjetaSeleccionada.limiteTotal.toLocaleString()}</CardSubtitle>
                </>
              )}
          </Card>
        </Container>

        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Último cierre</CardTitle>

            {cargandoTarjetas ?
              (
                <>
                  <CardSubtitle tag={"h3"} >Cargando...</CardSubtitle>
                </>
              ) :
              (
                <>
                  <CardSubtitle tag={"h3"}>{formatearFecha(tarjetaSeleccionada.ultimoCierre)}</CardSubtitle>
                </>
              )}

          </Card>
        </Container>




        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Próximo cierre</CardTitle>
            {cargandoTarjetas ?
              (
                <>
                  <CardSubtitle tag={"h3"} >Cargando...</CardSubtitle>
                </>
              ) :
              (
                <>
                  <CardSubtitle tag={"h3"}>{formatearFecha(tarjetaSeleccionada.proximoCierre)}</CardSubtitle>
                </>
              )}
          </Card>
        </Container>

        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardTitle tag={"h2"} className="text-center">Próximo vencimiento</CardTitle>
            {cargandoTarjetas ?
              (
                <>
                  <CardSubtitle tag={"h3"} >Cargando...</CardSubtitle>
                </>
              ) :
              (
                <>
                  <CardSubtitle tag={"h3"}>{formatearFecha(tarjetaSeleccionada.proximoVencimiento)}</CardSubtitle>
                </>
              )}
          </Card>
        </Container>



      </Container>


      <CardBody className="d-flex flex-column justify-content-center align-items-center text-center">
        <Label for="autor">Seleccione el autor para ver sus consumos</Label>
        <Input type="select" className="text-center my-3" name="autor" style={{ maxWidth: "80%" }} onChange={handleSelectAutor}>




          {cargandoAutores ?
            (
              <>
                <option>Cargando...</option>
              </>
            ) :
            (
              <>
                <option value="">Todos</option>
                {autores.map((autor, id) => {

                  return (
                    <option key={id} value={autor.idAutor}>{autor.nombre}</option>
                  )
                })}
              </>
            )
          }


        </Input>

        <Container style={{ maxWidth: "15rem", minWidth: "10rem" }} className="m-2">
          <Card body className="align-items-center">
            <CardHeader>
              <CardTitle tag={"h5"} style={{ lineHeight: "1.8em" }}>

                {cargandoAutores ?
                  (
                    <>
                      Cargando...
                    </>
                  ) :
                  (
                    <>
                      A pagar por <span>{autorSeleccionado.nombre}</span>
                    </>
                  )
                }


              </CardTitle>
            </CardHeader>
            <CardBody>

              {cargandoAutores ?
                (
                  <>
                     <CardSubtitle tag={"h2"} className="py-2">Cargando...</CardSubtitle>
                  </>
                ) :
                (
                  <>
                    <CardSubtitle tag={"h2"} className="py-2">${autorSeleccionado.totalAPagar}</CardSubtitle>
                  </>
                )
              }


             
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