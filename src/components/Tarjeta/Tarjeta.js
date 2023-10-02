import React from "react";
import './Tarjeta.css'

function Tarjeta(props) {

    const nombre = props.nombre;
    const limiteActual = props.limiteActual;
    const limiteDisponible = props.limiteDisponible;
    const cierreAnterior = new Date(props.cierreAnterior).toLocaleDateString();
    const cierreActual = new Date(props.cierreActual).toLocaleDateString();
    const vencimientoAnterior = new Date(props.vencimientoAnterior).toLocaleDateString();
    const vencimientoActual = new Date(props.vencimientoActual).toLocaleDateString();
    const totalVencimientoAnterior = props.totalVencimientoAnterior;
    const totalVencimientoActual = props.totalVencimientoActual;

    return (

        <div className="tarjeta-container">


            <div className="tarjeta-nombre">
                <h1>{nombre}</h1>
                <p>Detalles y consumos de la tarjeta de crédito</p>

            </div>

            <div className="items-container">
                <div className="tarjeta-item">
                    <h2>A pagar</h2>
                    <h1>${totalVencimientoActual}</h1>
                </div>
                <div className="tarjeta-item">
                    <h2>Límite actual</h2>
                    <h1>${limiteActual}</h1>
                </div>
                <div className="tarjeta-item">
                    <h2>Límite disponible</h2>
                    <h1>${limiteDisponible}</h1>
                </div>
                <div className="tarjeta-item">
                    <h2>Cierre anterior</h2>
                    <h1>{cierreAnterior}</h1>
                </div>
                <div className="tarjeta-item">
                    <h2>Cierre actual</h2>
                    <h1>{cierreActual}</h1>
                </div>
                <div className="tarjeta-item">
                    <h2>Vencimiento anterior</h2>
                    <h1>{vencimientoAnterior}</h1>
                </div>
                <div className="tarjeta-item">
                    <h2>Vencimiento actual</h2>
                    <h1>{vencimientoActual}</h1>
                </div>
                <div className="tarjeta-item">
                    <h2>A pagar por</h2>
                    <select>
                        <option>Rodrigo</option>
                        <option>Rodrigo</option>
                        <option>Rodrigo</option>

                    </select>

                    <h1>$5000</h1>
                </div>

            </div>



        </div>
    );

}

export default Tarjeta;