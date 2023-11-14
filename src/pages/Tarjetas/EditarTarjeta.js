import React, { useState, useEffect } from 'react'
import Header from "../../components/Header/HeaderComponent";
import Footer from "../../components/Footer/FooterComponent";

import { fetchTarjetas } from "../../api/TarjetaAPI";
import { Table, Button, ButtonGroup, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import { TARJETAS_EDITAR } from '../../helpers/ApiRoutes';

const EditarTarjeta = () => {

  const URL_EDITAR_TARJETA = "/tarjetas/editar";

  const [tarjetas, setTarjetas] = useState([]);

  const [modal, setModal] = useState(false);
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);
  const [editarFormData, setEditarFormData] = useState({
    idTarjeta: "",
    nombre: '',
    limiteTotal: '',
    ultimoCierre: '',
    vencimiento: '',
    proximoCierre: '',
    proximoVencimiento: ''
  });


  const [statusOk, setStatusOk] = useState(false);
  const [errors, setErrors] = useState({});
  const toggleModal = (tarjeta) => {
    setTarjetaSeleccionada(tarjeta);
    setModal(!modal)

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditarFormData({ ...editarFormData, [name]: value });
  };

  useEffect(() => {

    fetchTarjetas().then((tarjetas) => {

      setTarjetas(tarjetas)

    }).catch((error) => {

      console.log(error);

    });

  }, [])

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

  const editarTarjetaSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(editarFormData);

    const urlEditarTarjeta = `${TARJETAS_EDITAR}/${tarjetaSeleccionada.idTarjeta}`;

    if (Object.keys(validationErrors).length === 0) {

      // FORMULARIO VALIDO
      try {

        const response = await fetch(urlEditarTarjeta, {
          method: 'POST',
          body: JSON.stringify(editarFormData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (await response.status == 200) {
          setStatusOk(true)
          alert("Se ha actualizado la tarjeta")
          window.location.reload();
        } else {
          setStatusOk(false)
        }

        toggleModal();


      } catch (error) {
        console.error(error);
      }


    } else {
      setErrors(validationErrors);
    }


  }


  return (
    <div className="d-flex flex-column">

      <Header />

      <main>
        <Table striped responsive bordered className="m-0 vw-100 text-center align-middle">
          <thead className="align-middle">
            <tr>
              <th>Tarjeta</th>
              <th>Límite total</th>
              <th>Último cierre</th>
              <th>Vencimiento</th>
              <th>Próximo cierre</th>
              <th>Próximo vencimiento</th>
              <th>Editar</th>
            </tr>
          </thead>

          <tbody>
            {tarjetas.map((tarjeta, id) => {

              return (
                <tr key={id}>
                  <th>{tarjeta.nombre}</th>
                  <th>${tarjeta.limiteTotal.toLocaleString()}</th>
                  <th>{formatearFecha(tarjeta.ultimoCierre)}</th>
                  <th>{formatearFecha(tarjeta.vencimiento)}</th>
                  <th>{formatearFecha(tarjeta.proximoCierre)}</th>
                  <th>{formatearFecha(tarjeta.proximoVencimiento)}</th>

                  <td>
                    <ButtonGroup>
                      <Button color="primary" onClick={() => toggleModal(tarjeta)}>Editar</Button>

                    </ButtonGroup>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </Table>

        <Modal isOpen={modal} >
          <ModalHeader toggle={toggleModal}>
            Editar: {tarjetaSeleccionada && tarjetaSeleccionada.nombre}
          </ModalHeader>
          <ModalBody>


            <Form className="text-dark"  onSubmit={editarTarjetaSubmit} >


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


          </ModalBody>

        </Modal>
      </main>

      <Footer />

    </div>
  )
}

export default EditarTarjeta