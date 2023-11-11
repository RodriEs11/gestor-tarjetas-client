import React, { useState } from 'react'
import './Consumo.css';
import { Container, Card, CardBody, CardTitle, CardSubtitle, List, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { IoPeople, IoListOutline, IoCalendarNumber } from 'react-icons/io5';

function Consumo(props) {

    // Modal -> Ventana emergente por sobre la página
    const [modal, setModal] = useState(false);

    const cambiarEstadoModal = () => {
        setModal(!modal);
    }

    /*
        const objetoConsumo = props.consumoObjeto;
        const id = objetoConsumo.id;
        const total = objetoConsumo.total;
        const cantidadCuotas = objetoConsumo.cantidadCuotas;
        const cuotasPagadas = objetoConsumo.cuotasPagadas;
        const valorCuota = (total / cantidadCuotas).toFixed(2);
        const consumo = objetoConsumo.consumo;
        const autor = objetoConsumo.autor;
        const fechaCompra = new Date(objetoConsumo.fechaCompra).toLocaleDateString();
        const notas = objetoConsumo.notas;
    
        const [isNotasVisible, setIsNotasVisible] = useState(false);
    
    
        const abrirNotas = () => {
            setIsNotasVisible(true);
        }
    
        const cerrarNotas = () => {
            setIsNotasVisible(false);
        }
    
    
    */

    return (

        <Card style={{ width: '20rem', }} color="light" className='m-3 shadow' >
            <CardBody>
                <CardTitle tag={"h4"}>Nombre consumo</CardTitle>
                <CardSubtitle tag={"h5"} className="mb-2 text-muted">$30.000</CardSubtitle>
                <CardSubtitle tag={"h6"} className="mb-2 text-muted">C/Cuota $5.000</CardSubtitle>
            </CardBody>

            <hr className="m-0 mx-3"></hr>
            <CardBody className="p-0" >

                <List className="px-3 my-2">
                    <IoPeople size={20} className="me-2" />
                    <span>Auto</span>
                </List>

                <List className="px-3 my-2">
                    <IoListOutline size={20} className="me-2" />
                    <span>Cuota 1/6</span>
                </List>

                <List className="px-3 my-2">
                    <IoCalendarNumber size={20} className="me-2" />
                    <span>2020/01/01</span>
                </List>


            </CardBody>

            <CardBody color="info">
                <ButtonGroup>
                    <Button color="primary" onClick={cambiarEstadoModal}>Notas</Button>
                    <Button color="success">Pagar</Button>
                </ButtonGroup>

            </CardBody>

            <Modal isOpen={modal} toggle={cambiarEstadoModal}>
                <ModalHeader toggle={cambiarEstadoModal}>Nombre consumo</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi u
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={cambiarEstadoModal}>Cerrar</Button>
                </ModalFooter>
            </Modal>

        </Card>



    )
}

export default Consumo;

/*

  <div className='consumo-container' id={id}>


            <h2 title='Nombre del consumo'>{consumo}</h2>
            <h1 title='Valor unitario de cada cuota'>${valorCuota}</h1>
            <h3 title='Monto total del consumo'>Total: $ {total}</h3>
            <hr></hr>

            <ul className='lista'>

                <li className='item'>
                    <IoPeople size={20} className='item-icono' title='Autor de la compra' />
                    <span className='item-texto'>{autor}</span>
                </li>

                <li className='item'>
                    <IoListOutline size={20} className='item-icono' title='Cuotas restantes' />
                    <span className='item-texto'>Cuota {cuotasPagadas}/{cantidadCuotas}</span>
                </li>

                <li className='item'>
                    <IoCalendarNumber size={20} className='item-icono' title='Fecha de la compra' />
                    <span className='item-texto'>{fechaCompra}</span>
                </li>

                <div className='botones-container'>
                    
                    <button className='boton' onClick={abrirNotas}>Ver notas</button>
                    {isNotasVisible && (
                        <div className="modal">

                            <div className="modal-content">

                                <h1>{consumo}</h1>
                                <div className='modal-content-notas'>
                                    <p>{notas}</p>
                                </div>
                                <IoCloseCircleOutline className='boton-cerrar' onClick={cerrarNotas} size={25}></IoCloseCircleOutline>
                                



                            </div>
                        </div>
                    )}
                    <button className='boton secundario' onClick={() => { console.log("pagar") }}>Pagar</button>

                </div>

            </ul>


        </div>

*/