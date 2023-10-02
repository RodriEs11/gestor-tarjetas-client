import React from "react";
import './FormAgregarCuota.css';

function FormAgregarCuota() {
    return (

        <div className="form-container">
            <h1 className="titulo">Agregar consumo</h1>
            <form className="form" action="#" method="POST">

                <label for="tarjeta">Tarjeta de crédito</label>
                <select name="tarjeta">
                    <option value="1">Visa</option>
                    <option value="2">Mastercad</option>
                </select>

                <label for="nombreGasto">Nombre</label>
                <input type="text" id="nombreGasto" name="nombreGasto" required />

                <label for="autor">Autor</label>
                <select name="autor">
                    <option value="1">Rodrigo</option>
                    <option value="2">Miguelito</option>
                </select>

                <label for="total">Monto total</label>
                <input type="number" id="total" name="total" required />

                <label for="totalCuotas">Cantidad de Cuotas</label>
                <input type="number" id="totalCuotas" name="totalCuotas" required min={0} max={48} />

                <label for="fechaCompra">Fecha de Compra</label>
                <input type="date" id="fechaCompra" name="fechaCompra" required />

                <label for="observaciones">Observaciones</label>
                <textarea id="observaciones" name="observaciones"></textarea>


                <button className="boton-agregar" type="submit">Agregar Consumo</button>

                <button className="boton-borrar" type="button">Borrar</button>

            </form>
        </div>
    );
}

export default FormAgregarCuota;