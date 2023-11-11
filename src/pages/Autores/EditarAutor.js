
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/HeaderComponent";
import Footer from "../../components/Footer/FooterComponent";
import { Table, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup, Label } from "reactstrap";

import { fetchAutores } from "../../api/AutorAPI";
import { AUTORES_EDITAR } from '../../helpers/ApiRoutes';

function EditarAutores() {

  const URL_EDITAR_AUTOR = "/autores/editar";

  const [autores, setAutores] = useState([]);

  const [modal, setModal] = useState(false);
  const [autorSeleccionado, setAutorSeleccionado] = useState(null);

  const [editarFormData, setEditarFormData] = useState({
    idAutor: "",
    nombre: ""
  });
  const [errors, setErrors] = useState({});
  const [statusOk, setStatusOk] = useState(false);

  const toggleModal = (autor) => {
    setAutorSeleccionado(autor);
    setModal(!modal)

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditarFormData({ ...editarFormData, [name]: value });
  };

  useEffect(() => {

    fetchAutores().then((autores) => {

      setAutores(autores)

    }).catch((error) => {

      console.log(error);

    });

  }, [])


  const validateForm = (data) => {
    const errors = {};

    // VALIDACIONES DEL FORMULARIO

    if (data.nombre.trim() === '') {
      errors.nombre = 'Debe ingresar un nombre';
    }

    return errors;
  };


  const editarAutorSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(editarFormData);

    const urlEditarAutor = `${AUTORES_EDITAR}/${autorSeleccionado.idAutor}`;

    if (Object.keys(validationErrors).length === 0) {

      // FORMULARIO VALIDO
      try {

        const response = await fetch(urlEditarAutor, {
          method: 'POST',
          body: JSON.stringify(editarFormData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (await response.status == 200) {
          setStatusOk(true)
          alert("Se ha actualizado el autor")
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
        <Table striped responsive bordered className="m-0 vw-100 w-75 text-center align-middle">

          <thead className="align-middle">
            <tr>
              <th>Nombre</th>
              <th>Editar</th>
            </tr>
          </thead>

          <tbody>


            {autores.map((autor, id) => {

              return (
                <tr key={id}>
                  <td>{autor.nombre}</td>
                  <td>
                    <ButtonGroup>
                      <Button color="primary" onClick={() => toggleModal(autor)}>Editar</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              )
            })}




          </tbody>
        </Table>

        <Modal isOpen={modal}>
          <ModalHeader toggle={toggleModal}>
            Editar: {autorSeleccionado && autorSeleccionado.nombre}
          </ModalHeader>
          <ModalBody>


            <Form className="text-dark" style={{ width: "25rem" }} onSubmit={editarAutorSubmit} >

              <FormGroup>

                <Label for="nombre" >Ingrese nuevo nombre del autor</Label>
                <Input type="text" name="nombre" onChange={handleChange}></Input>
                {errors.nombre && <p className="text-danger">{errors.nombre}</p>}

              </FormGroup>

              <Button color="primary" className="me-2" type='submit'>Guardar</Button>


            </Form >


          </ModalBody>

        </Modal>

      </main>

      <Footer />

    </div >
  );
}

export default EditarAutores;
