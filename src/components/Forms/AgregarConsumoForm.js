import React, { useState, useEffect } from "react";
//import "./FormAgregarConsumo.css";

import { fetchTarjetas } from "../../api/TarjetaAPI";
import { fetchAutores } from "../../api/AutorAPI";
import { Form, FormGroup, Label, Input, Button, Container, Modal, ModalFooter, Alert, ModalBody, Fade } from "reactstrap";

function AgregarConsumoForm() {
  const [tarjetas, setTarjetas] = useState([]);
  const [autores, setAutores] = useState([]);
  const [formData, setFormData] = useState({
    tarjeta: '',
    consumo: '',
    autor: '',
    montoTotal: '',
    cantCuotas: '',
    fechaCompra: '',
    notas: ''
  })

  const [errors, setErrors] = useState({});
  const [statusOk, setStatusOk] = useState(false);
  const [successModal, setSuccessModal] = useState(false);


  // FETCH APIS

  // GET Tarjetas
  useEffect(() => {
    fetchTarjetas()
      .then((response) => {
        setTarjetas(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // GET Autores
  useEffect(() => {
    fetchAutores()
      .then((response) => {
        setAutores(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


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

    if (data.tarjeta.trim() === '') {
      errors.tarjeta = 'Debe seleccionar una tarjeta';
    }

    if (data.consumo.trim() === '') {
      errors.consumo = 'Debe ingresar el nombre del consumo';
    }
    if (data.autor.trim() === '') {
      errors.autor = 'Debe seleccionar un autor';
    }
    if (data.montoTotal.trim() === '') {
      errors.montoTotal = 'Debe ingresar un monto válido';
    }
    if (data.cantCuotas.trim() === '') {
      errors.cantCuotas = 'Debe ingresar un valor de cuotas válido';
    }
    if (data.fechaCompra.trim() === '') {
      errors.fechaCompra = 'Debe seleccionar una fecha';
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
            Autor agregado con éxito
          </Alert>
          :
          <Alert color="danger">
            Ha ocurrido un error al intentar enviar la solicitud
          </Alert>
        }

      </Modal>

      <Form className="text-light my-5 p-3 " style={{ width: "35rem" }} onSubmit={handleSubmit}>

        <FormGroup>
          <Label for="tarjeta" >Tarjeta de crédito *</Label>

          <Input type="select" name="tarjeta" onChange={handleChange}>
            <option value={""}>Selecciona una tarjeta</option>

            {tarjetas.map((tarjeta, id) => {
              return (
                <option key={id} value={tarjeta.idTarjeta}>{tarjeta.nombre}</option>
              )
            })}

          </Input>
          {errors.tarjeta && <p className="text-danger">{errors.tarjeta}</p>}
        </FormGroup>


        <FormGroup>
          <Label for="consumo">Consumo *</Label>
          <Input type="text" name="consumo" onChange={handleChange}></Input>
          {errors.consumo && <p className="text-danger">{errors.consumo}</p>}
        </FormGroup>


        <FormGroup>
          <Label for="autor" >Autor *</Label>
          <Input type="select" name="autor" onChange={handleChange}>
            <option value={""}>Selecciona un autor</option>

            {autores.map((autor, id) => {
              return (
                <option key={id} value={autor.idAutor}>{autor.nombre}</option>
              )
            })}

          </Input>
          {errors.autor && <p className="text-danger">{errors.autor}</p>}
        </FormGroup>

        <FormGroup>
          <Label for="montoTotal">Monto total ($) *</Label>
          <Input type="number" name="montoTotal" min={1} pattern="[0-9]" onChange={handleChange}></Input>
          {errors.montoTotal && <p className="text-danger">{errors.montoTotal}</p>}
        </FormGroup>


        <FormGroup>
          <Label for="cantCuotas">Cantidad de Cuotas *</Label>
          <Input type="number" name="cantCuotas" min={1} max={48} pattern="[0-9]" onChange={handleChange}></Input>
          {errors.cantCuotas && <p className="text-danger">{errors.cantCuotas}</p>}
        </FormGroup>

        <FormGroup>
          <Label for="fechaCompra">Fecha de compra *</Label>
          <Input type="date" name="fechaCompra" onChange={handleChange}></Input>
          {errors.fechaCompra && <p className="text-danger">{errors.fechaCompra}</p>}
        </FormGroup>

        <FormGroup>
          <Label for="notas">Notas</Label>
          <Input type="textarea" name="notas" onChange={handleChange}></Input>
        </FormGroup>

        <Button color="primary" className="me-2" type="submit">Enviar</Button>

      </Form >
    </Container>


  );
}

/*

    <form  onSubmit={handleSubmit}>
      <div>
        <h1>Agregar consumo</h1>

        <div>
          
          <label htmlFor="tarjeta" className="form">Tarjeta de crédito</label>

          <select name="tarjeta" required value={formData.tarjeta} onChange={handleChange}>
            {tarjetas.map((tarjeta, id) => {
              return (
                <option key={id} value={tarjeta.idTarjeta}>
                  {tarjeta.nombre}
                </option>
              );
            })}
          </select>
        </div>

        <div >
          <label htmlFor="consumo">Nombre</label>
          <input name="consumo" type="text" className="input" required value={formData.consumo} onChange={handleChange}></input>
        </div>

        <div >
          <label htmlFor="autor">Autor</label>

          <select name="autor" className="input" required value={formData.autor} onChange={handleChange} defaultValue={autores[0]?.idAutor}>
            {autores.map((autor, id) => {
              return (
                <option key={id} value={autor.idAutor}>
                  {autor.nombre}
                </option>
              );
            })}
          </select>
        </div>

        <div >
          <label htmlFor="total">Monto Total</label>
          <input
            name="total"
            type="number"
            className="input"
            inputMode="numeric"
            pattern="[0-9]"
            min={0}
            required
            onChange={handleChange}
          ></input>
        </div>

        <div >
          <label htmlFor="cuotas">Cantidad de cuotas</label>
          <input
            name="cuotas"
            type="number"
            className="input"
            min={1}
            max={36}
            required
            onChange={handleChange}
          ></input>
        </div>

        <div >
          <label htmlFor="fechaCompra">Fecha de Compra</label>
          <input
            name="fechaCompra"
            type="date"
            className="input"
            required
            onChange={handleChange}
          ></input>
        </div>

        <div >
          <label htmlFor="notas">Notas</label>
          <textarea
            name="notas"
            type="textarea"
            rows={4}
            cols={20}
            className="input"
            onChange={handleChange}
          ></textarea>
        </div>
        <div >
          <button type="submit" >
            Agregar consumo
          </button>
          <button type="button" >
            Borrar
          </button>
        </div>
      </div>


      <div >

        {mensajeExito && (
          <div>
            <div >
              <p>Consumo agregado correctamente</p>
            </div>
          </div>
        )}


      </div>
    </form>


*/


/*
  return (

    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Agregar consumo</h1>

        <div className="input-group">
          <label htmlFor="tarjeta">Tarjeta de crédito</label>

          <select name="tarjeta" required value={formData.tarjeta} onChange={handleChange}>
            {tarjetas.map((tarjeta, id) => {
              return (
                <option key={id} value={tarjeta.idTarjeta}>
                  {tarjeta.nombre}
                </option>
              );
            })}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="consumo">Nombre</label>
          <input name="consumo" type="text" className="input" required value={formData.consumo} onChange={handleChange}></input>
        </div>

        <div className="input-group">
          <label htmlFor="autor">Autor</label>

          <select name="autor" className="input" required value={formData.autor} onChange={handleChange} defaultValue={autores[0]?.idAutor}>
            {autores.map((autor, id) => {
              return (
                <option key={id} value={autor.idAutor}>
                  {autor.nombre}
                </option>
              );
            })}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="total">Monto Total</label>
          <input
            name="total"
            type="number"
            className="input"
            inputMode="numeric"
            pattern="[0-9]"
            min={0}
            required
            onChange={handleChange}
          ></input>
        </div>

        <div className="input-group">
          <label htmlFor="cuotas">Cantidad de cuotas</label>
          <input
            name="cuotas"
            type="number"
            className="input"
            min={1}
            max={36}
            required
            onChange={handleChange}
          ></input>
        </div>

        <div className="input-group">
          <label htmlFor="fechaCompra">Fecha de Compra</label>
          <input
            name="fechaCompra"
            type="date"
            className="input"
            required
            onChange={handleChange}
          ></input>
        </div>

        <div className="input-group">
          <label htmlFor="notas">Notas</label>
          <textarea
            name="notas"
            type="textarea"
            rows={4}
            cols={20}
            className="input"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="input-group">
          <button type="submit" className="boton-principal">
            Agregar consumo
          </button>
          <button type="button" className="boton-secundario">
            Borrar
          </button>
        </div>
      </form>


      <div className="message-container">

        {mensajeExito && (
          <div className="message-modal">
            <div className="message-modal-content success">
              <p>Consumo agregado correctamente</p>
            </div>
          </div>
        )}


      </div>
    </>

  );
}
*/
export default AgregarConsumoForm;
