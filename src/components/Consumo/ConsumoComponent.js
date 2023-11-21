import React, { useEffect, useState } from 'react'
import './Consumo.css';
import { Container, Card, CardBody, CardTitle, CardSubtitle, List, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { IoPeople, IoListOutline, IoCalendarNumber } from 'react-icons/io5';
import { formatearFecha, isStringVacio } from '../../helpers/util';
import { CONSUMOS_PAGAR_PROXIMA_CUOTA } from '../../helpers/ApiRoutes';

function Consumo(props) {

    const id = props.id;
    const nombre = props.nombre;
    const montoTotal = parseInt(props.montoTotal);
    const precioCuota = parseInt(props.precioCuota);
    const autor = props.autor;
    const numeroProximaCuota = props.numeroProximaCuota;
    const cantidadCuotas = props.cantidadCuotas;
    const fechaCompra = formatearFecha(props.fechaCompra);
    const notas = props.notas;
    const idDetalleCuotas = props.idDetalleCuotas;
    const finalizado = props.finalizado === 1 ? true : false;

    // Modal -> Ventana emergente por sobre la página
    const [modal, setModal] = useState(false);

    const cambiarEstadoModal = () => {
        setModal(!modal);
    }

    const pagarCuota = async () => {

        try {

            const response = await fetch(CONSUMOS_PAGAR_PROXIMA_CUOTA(idDetalleCuotas), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (await response.status == 200) {
                alert(`${nombre}: Se ha pagado la cuota ${numeroProximaCuota} de ${cantidadCuotas}`)
                window.location.reload();

            } else {
                alert(`Ha ocurrido un error`);
            }


        } catch (error) {
            console.error(error);
        }
    }


    return (

        <Card id={id} style={{ width: '20rem', color: finalizado ? 'white' : 'black' }} color={finalizado ? 'secondary' : 'light'} className='m-3 shadow' >
            <CardBody>
                <CardTitle tag={"h4"}>{nombre}</CardTitle>
                <CardSubtitle tag={"h5"} className="mb-2 text">${montoTotal.toLocaleString()}</CardSubtitle>
                <CardSubtitle tag={"h6"} className="mb-2 text">{cantidadCuotas} cuotas de: ${precioCuota.toLocaleString()}</CardSubtitle>
            </CardBody>

            <hr className="m-0 mx-3"></hr>
            <CardBody className="p-0" >
                <List className="px-3 my-2">
                    <IoPeople size={20} className="me-2" title='Nombre del autor' />
                    <span>{autor}</span>
                </List>

                <List className="px-3 my-2">
                    <IoListOutline size={20} className="me-2" title='Cuotas pendientes' />
                    <span>Cuota {numeroProximaCuota}/{cantidadCuotas}</span>
                </List>

                <List className="px-3 my-2">
                    <IoCalendarNumber size={20} className="me-2" title='Fecha de compra' />
                    <span>{fechaCompra}</span>
                </List>


            </CardBody>

            <CardBody color="info">
                <ButtonGroup>

                    <Button color="primary" onClick={cambiarEstadoModal} disabled={isStringVacio(notas)}>Notas</Button>
                    <Button color="success" onClick={pagarCuota} disabled={finalizado}>Pagar</Button>
                </ButtonGroup>

            </CardBody>

            <Modal isOpen={modal} toggle={cambiarEstadoModal}>
                <ModalHeader toggle={cambiarEstadoModal}>{nombre}</ModalHeader>
                <ModalBody>
                    {notas}
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={cambiarEstadoModal}>Cerrar</Button>
                </ModalFooter>
            </Modal>

        </Card>



    )
}

export default Consumo;

