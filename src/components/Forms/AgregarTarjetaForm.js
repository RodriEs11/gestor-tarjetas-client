import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Container, Button, Modal, Alert } from "reactstrap"

function AgregarTarjetaForm() {

    const [tarjetas, setTarjetas] = useState([]);
    const [autores, setAutores] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '',
        limiteTotal: '',
        ultimoCierre: '',
        vencimiento: '',
        proximoCierre: '',
        proximoVencimiento: ''
    })

    const [errors, setErrors] = useState({});
    const [statusOk, setStatusOk] = useState(false);
    const [successModal, setSuccessModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleSuccessModal = () => {
        setSuccessModal(!successModal)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm(formData);
        const API_URI = "/API";

        if (Object.keys(validationErrors).length === 0) {

            // FORMULARIO VALIDO
            try {

                const response = await fetch(API_URI, {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (await response.status == 200) {
                    setStatusOk(true)
                } else {
                    setStatusOk(false)
                }

                toggleSuccessModal();


            } catch (error) {
                console.error(error);
            }


        } else {
            setErrors(validationErrors);
        }


    }

    const validateForm = (data) => {
        const errors = {};

        // VALIDACIONES DEL FORMULARIO

        if (data.nombre.trim() === '') {
            errors.nombre = 'Debe ingresar un nombre';
        }

        if (data.limiteTotal.trim() === '') {
            errors.limiteTotal = 'Debe ingresar un monto válido';
        }
        if (data.ultimoCierre.trim() === '') {
            errors.ultimoCierre = 'Debe ingresar una fecha válida';
        }
        if (data.vencimiento.trim() === '') {
            errors.vencimiento = 'Debe ingresar una fecha válida';
        }
        if (data.proximoCierre.trim() === '') {
            errors.proximoCierre = 'Debe ingresar una fecha válida';
        }
        if (data.proximoVencimiento.trim() === '') {
            errors.proximoVencimiento = 'Debe ingresar una fecha válida';
        }

        return errors;
    };


    // BOTON CLOSE MODAL
    const externalCloseButton = (
        <button
            type="button"
            className="close"
            style={{ position: 'absolute', top: '15px', right: '15px' }}
            onClick={toggleSuccessModal}
        >
            &times;
        </button>
    );



    return (
        <Container className="d-flex justify-content-center align-items-center">

            <Modal isOpen={successModal} external={externalCloseButton} >

                {statusOk ?

                    <Alert color="success">
                        Tarjeta agregada con éxito
                    </Alert>
                    :
                    <Alert color="danger">
                        Ha ocurrido un error al intentar enviar la solicitud
                    </Alert>
                }

            </Modal>

            <Form className="text-light my-5 p-3" style={{ width: "30rem" }} onSubmit={handleSubmit} >


                <FormGroup>
                    <Label for="nombre">Nombre de la tarjeta *</Label>
                    <Input type="text" name="nombre" onChange={handleChange}></Input>
                    {errors.nombre && <p className="text-danger">{errors.nombre}</p>}
                </FormGroup>

                <FormGroup>
                    <Label for="limiteTotal">Límite total ($) *</Label>
                    <Input type="number" name="limiteTotal" min={1} pattern="[0-9]" onChange={handleChange}></Input>
                    {errors.limiteTotal && <p className="text-danger">{errors.limiteTotal}</p>}
                </FormGroup>

                <FormGroup>
                    <Label for="ultimoCierre">Último cierre *</Label>
                    <Input type="date" name="ultimoCierre" onChange={handleChange}></Input>
                    {errors.ultimoCierre && <p className="text-danger">{errors.ultimoCierre}</p>}
                </FormGroup>

                <FormGroup>
                    <Label for="vencimiento">Vencimiento *</Label>
                    <Input type="date" name="vencimiento" onChange={handleChange}></Input>
                    {errors.vencimiento && <p className="text-danger">{errors.vencimiento}</p>}
                </FormGroup>


                <FormGroup>
                    <Label for="proximoCierre">Próximo cierre *</Label>
                    <Input type="date" name="proximoCierre" onChange={handleChange}></Input>
                    {errors.proximoCierre && <p className="text-danger">{errors.proximoCierre}</p>}
                </FormGroup>

                <FormGroup>
                    <Label for="proximoVencimiento">Próximo vencimiento *</Label>
                    <Input type="date" name="proximoVencimiento" onChange={handleChange}></Input>
                    {errors.proximoVencimiento && <p className="text-danger">{errors.proximoVencimiento}</p>}
                </FormGroup>




                <Button color="primary" className="me-2" type='submit'>Enviar</Button>


            </Form >
        </Container>
    )
};

export default AgregarTarjetaForm