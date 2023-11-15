import React, { useState } from 'react'
import './Consumo.css';
import { Container, Card, CardBody, CardTitle, CardSubtitle, List, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { IoPeople, IoListOutline, IoCalendarNumber } from 'react-icons/io5';

function Consumo(props) {

    const nombre = props.nombre;
    const montoTotal = parseInt(props.montoTotal);
    const precioCuota = parseInt(props.precioCuota);
    const autor = props.autor;
    const cuotasRestantes = props.cuotasRestantes;
    const cantidadCuotas = props.cantidadCuotas;
    const fechaCompra = props.fechaCompra;
    const notas = props.notas;


    // Modal -> Ventana emergente por sobre la página
    const [modal, setModal] = useState(false);

    const cambiarEstadoModal = () => {
        setModal(!modal);
    }


    return (

        <Card style={{ width: '20rem', }} color="light" className='m-3 shadow' >
            <CardBody>
                <CardTitle tag={"h4"}>{nombre}</CardTitle>
                <CardSubtitle tag={"h5"} className="mb-2 text-muted">${montoTotal.toLocaleString()}</CardSubtitle>
                <CardSubtitle tag={"h6"} className="mb-2 text-muted">C/Cuota ${precioCuota.toLocaleString()}</CardSubtitle>
            </CardBody>

            <hr className="m-0 mx-3"></hr>
            <CardBody className="p-0" >

                <List className="px-3 my-2">
                    <IoPeople size={20} className="me-2" />
                    <span>{autor}</span>
                </List>

                <List className="px-3 my-2">
                    <IoListOutline size={20} className="me-2" />
                    <span>Cuota {cuotasRestantes}/{cantidadCuotas}</span>
                </List>

                <List className="px-3 my-2">
                    <IoCalendarNumber size={20} className="me-2" />
                    <span>{fechaCompra}</span>
                </List>


            </CardBody>

            <CardBody color="info">
                <ButtonGroup>
                    <Button color="primary" onClick={cambiarEstadoModal}>Notas</Button>
                    <Button color="success">Pagar</Button>
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

