import React, { useEffect, useState } from "react";
import Header from "../../components/Header/HeaderComponent";
import Footer from "../../components/Footer/FooterComponent";
import Consumo from "../../components/Consumo/ConsumoComponent";

import { Container, Card, CardBody, CardHeader, CardTitle, Input, CardSubtitle, Label, Button, ButtonGroup } from "reactstrap";
import Tarjeta from "../../components/Tarjeta/TarjetaComponent";

import { fetchTarjetas, obtenerPagarTotalTarjeta } from "../../api/TarjetaAPI";
import { fetchAutores, obtenerPagarTotalAutor } from "../../api/AutorAPI";
import { fetchConsumos } from "../../api/ConsumoAPI";

import { formatearFecha } from "../../helpers/util";

function VerConsumos() {



    const [tarjetas, setTarjetas] = useState([]);
    const [autores, setAutores] = useState([]);
    const [consumos, setConsumos] = useState([]);
    const [pagarTotalAutor, setPagarTotalAutor] = useState(0);
    const [pagarTotalTarjeta, setPagarTotalTarjeta] = useState(0);


    const [tarjetaIdSeleccionada, setTarjetaIdSeleccionada] = useState(null);
    const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);


    const [autorIdSeleccionado, setAutorIdSeleccionado] = useState(null);
    const [autorSeleccionado, setAutorSeleccionado] = useState(null);

    const [cargandoTarjetas, setCargandoTarjetas] = useState(true);
    const [cargandoAutores, setCargandoAutores] = useState(true);
    const [cargandoConsumos, setCargandoConsumos] = useState(true);


    const [autorFiltroConsumos, setAutorFiltroConsumos] = useState(0); // 0 = Mostrar consumos de todos los autores


    useEffect(() => {

        fetchTarjetas().then((tarjetas) => {

            setTarjetas(tarjetas)
            setTarjetaSeleccionada(tarjetas[0]);
            setTarjetaIdSeleccionada(tarjetas[0].idTarjeta);
            setCargandoTarjetas(false);

        }).catch((error) => {

            console.log(error);

        });



        fetchAutores().then((autores) => {

            setAutores(autores)
            //setAutorSeleccionado(autores[0]);
            setCargandoAutores(false);

        }).catch((error) => {

            console.log(error);

        });

        fetchConsumos().then((consumos) => {

            setConsumos(consumos)
            setCargandoConsumos(false);

        }).catch((error) => {

            console.log(error);

        });

    }, [])

    const handleSelectTarjeta = (event) => {
        const idSeleccionado = parseInt(event.target.value, 10);
        setTarjetaSeleccionada(idSeleccionado);

        obtenerPagarTotalTarjeta(idSeleccionado).then((resultado) => {

            setPagarTotalTarjeta(resultado[0].totalAPagar); // 0-> Para obtener el primer array  [ {"totalAPagar": 10000 } ]
        }).catch((error) => {
            console.log(error);
        })

        // Buscar la tarjeta correspondiente en el array de tarjetas
        const tarjeta = tarjetas.find((t) => t.idTarjeta === idSeleccionado);
        setTarjetaSeleccionada(tarjeta);
    };

    const handleSelectAutor = (event) => {
        const idSeleccionadoAutor = parseInt(event.target.value, 10);
        setAutorIdSeleccionado(idSeleccionadoAutor);

        const autor = autores.find((a) => a.idAutor === idSeleccionadoAutor);



        //OBTIENE LA SUMA DE TODAS LAS CUOTAS PENDIENTES SEGUN EL AUTOR SELECCIONADO
        obtenerPagarTotalAutor(idSeleccionadoAutor).then((totalPagarAutor) => {

            setPagarTotalAutor(totalPagarAutor[0].totalAPagar);
        }).catch((error) => {
            console.error(error);
        })

        const autorConNuevosCampos = { ...autor, pagarTotalAutor: pagarTotalAutor };
        setAutorSeleccionado(autorConNuevosCampos);
    }


    return (
        <div className="d-flex flex-column">
            <Header />
            <main className="d-flex flex-column" style={{ backgroundColor: "#fff" }}>
                <Container className="d-flex flex-wrap justify-content-center align-items-center m-0 p-0">

                    <Input type="select" className="text-center" style={{ maxWidth: "45%" }} defaultValue={'DEFAULT'} onChange={handleSelectTarjeta}>
                        <option value="DEFAULT" disabled>Selecciona una tarjeta</option>

                        {cargandoTarjetas ? (
                            <option value="DEFAULT" disabled>Cargando tarjetas...</option>
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

                    {cargandoTarjetas ? (

                        <Tarjeta
                            nombre="Cargando..."
                            pagar="0"
                            vencimiento="Cargando..."
                            limiteTotal="0"
                            limiteDisponible="0"
                            ultimoCierre="Cargando..."
                            proximoCierre="Cargando..."
                            proximoVencimiento="Cargando..."
                        />
                    ) : (
                        <Tarjeta
                            nombre={tarjetaSeleccionada.nombre}
                            pagar={pagarTotalTarjeta ? pagarTotalTarjeta : 0}
                            vencimiento={formatearFecha(tarjetaSeleccionada.vencimiento)}
                            limiteTotal={tarjetaSeleccionada.limiteTotal}
                            limiteDisponible={0}
                            ultimoCierre={formatearFecha(tarjetaSeleccionada.ultimoCierre)}
                            proximoCierre={formatearFecha(tarjetaSeleccionada.proximoCierre)}
                            proximoVencimiento={formatearFecha(tarjetaSeleccionada.proximoVencimiento)}
                        />
                    )
                    }

                    <CardBody className="d-flex flex-column justify-content-center align-items-center text-center">
                        <Label for="autor">Seleccione el autor para calcular sus gastos</Label>

                        <Input type="select" className="text-center my-3" name="autor" style={{ maxWidth: "80%" }} defaultValue={'DEFAULT'} onChange={handleSelectAutor}>
                            <option value="DEFAULT" disabled>Selecciona un autor</option>

                            {cargandoAutores ? (
                                <option value="DEFAULT" disabled>Cargando autores...</option>
                            ) : (
                                <>
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

                                        {cargandoAutores ? (
                                            <span>Cargando autores...</span>
                                        ) : (
                                            <>
                                                A pagar por <span>{autorSeleccionado?.nombre}</span>
                                            </>
                                        )
                                        }

                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <CardSubtitle tag={"h2"} className="py-2">${pagarTotalAutor ? pagarTotalAutor.toLocaleString() : 0}</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Container>
                    </CardBody>
                </Container>
                <p >Filtrar consumos de:</p>

                <ButtonGroup className=" flex-wrap">

                    <Button
                        color="primary"
                        outline
                        onClick={() => setAutorFiltroConsumos(0)}
                        active={autorFiltroConsumos === 0}
                    >
                        Todos
                    </Button>

                    {autores.map((autor, id) => {
                        return (
                            <Button key={id}
                                color="primary"
                                outline
                                onClick={() => setAutorFiltroConsumos(autor.idAutor)}
                                active={autorFiltroConsumos === autor.idAutor}
                            >
                                {autor.nombre}
                            </Button>
                        )
                    })}


                </ButtonGroup>


                <Container className="d-flex flex-wrap justify-content-center align-items-center m-0 p-0">



                    {cargandoConsumos ? (
                        <span>Cargando consumos...</span>
                    ) : (
                        <>
                            {consumos.map((consumo, id) => {
                                //0-> Todos los consumos de todos los autores
                                if (autorFiltroConsumos === 0) {
                                    return (
                                        <Consumo
                                            key={id}
                                            id={id}
                                            nombre={consumo.nombre}
                                            montoTotal={consumo.montoTotal}
                                            precioCuota={consumo.precioCuota}
                                            autor={consumo.autor}
                                            numeroProximaCuota={consumo.numeroProximaCuota}
                                            cantidadCuotas={consumo.cantidadCuotas}
                                            fechaCompra={consumo.fechaCompra}
                                            notas={consumo.notas}
                                            idDetalleCuotas={consumo.idDetalleCuotas}
                                            finalizado={consumo.finalizado}
                                        />
                                    )
                                } else if (consumo.idAutor === autorFiltroConsumos) {
                                    return (

                                        <Consumo
                                            key={id}
                                            id={id}
                                            nombre={consumo.nombre}
                                            montoTotal={consumo.montoTotal}
                                            precioCuota={consumo.precioCuota}
                                            autor={consumo.autor}
                                            numeroProximaCuota={consumo.numeroProximaCuota}
                                            cantidadCuotas={consumo.cantidadCuotas}
                                            fechaCompra={consumo.fechaCompra}
                                            notas={consumo.notas}
                                            idDetalleCuotas={consumo.idDetalleCuotas}
                                            finalizado={consumo.finalizado}
                                        />
                                    )
                                }

                            })}
                        </>
                    )
                    }

                </Container>
            </main>
            <Footer />
        </div>
    );
}

export default VerConsumos;
