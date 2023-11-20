import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Container, Button, Modal, Alert } from "reactstrap"

import {AUTORES_AGREGAR} from '../../helpers/ApiRoutes';

function AgregarAutorForm() {

    const [formData, setFormData] = useState({
        nombre: ''
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

        if (Object.keys(validationErrors).length === 0) {

            // FORMULARIO VALIDO
            try {

                const response = await fetch(AUTORES_AGREGAR, {
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
        <Container className='d-flex justify-content-center align-items-center'>

            <Modal isOpen={successModal} external={externalCloseButton} >

                {statusOk ?

                    <Alert color="success">
                        Autor agregado con éxito
                    </Alert>
                    :
                    <Alert color="danger">
                        Ha ocurrido un error al intentar enviar la solicitud
                    </Alert>
                }

            </Modal>

            <Form className="text-light my-5 p-3" style={{ width: "25rem" }} onSubmit={handleSubmit} >


                <FormGroup>
                    <Label for="nombre">Nombre del autor</Label>
                    <Input type="text" name="nombre" onChange={handleChange}></Input>

                    {errors.nombre && <p className="text-danger">{errors.nombre}</p>}
                </FormGroup>

                <Button color="primary" className="me-2" type='submit'>Enviar</Button>


            </Form >
        </Container>
    )
};

export default AgregarAutorForm