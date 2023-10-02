import React from 'react'
import './Consumo.css';
import { IoPeople, IoListOutline, IoCalendarNumber } from 'react-icons/io5';


function Consumo(props) {

    const total = props.total;
    const cantidadCuotas = props.cantidadCuotas;
    const valorCuota = (total / cantidadCuotas).toFixed(2);
    const nombre = props.nombre;
    const autor = props.autor;
    const cuotasRestantes = 2;
    const fechaCompra = new Date(props.fechaCompra).toLocaleDateString();

    const botonVerNotas = props.onClick;


    return (

        <div className='consumo-container'>


            <h2>{nombre}</h2>
            <h1>${valorCuota}</h1>
            <h3>Total: $ {total}</h3>
            <hr></hr>

            <ul className='lista'>

                <li className='item'>
                    <IoPeople size={20} className='item-icono' title='Autor de la compra' />
                    <span className='item-texto'>{autor}</span>
                </li>

                <li className='item'>
                    <IoListOutline size={20} className='item-icono' title='Cuotas restantes' />
                    <span className='item-texto'>Cuota {cuotasRestantes}/{cantidadCuotas}</span>
                </li>

                <li className='item'>
                    <IoCalendarNumber size={20} className='item-icono' title='Fecha de la compra' />
                    <span className='item-texto'>{fechaCompra}</span>
                </li>

                <div className='botones-container'>
                    <button className='boton' onClick={props.onClick}>Ver notas</button>
                    <button className='boton secundario' onClick={props.onClick}>Pagar</button>

                </div>

            </ul>


        </div>


    )
}

export default Consumo;