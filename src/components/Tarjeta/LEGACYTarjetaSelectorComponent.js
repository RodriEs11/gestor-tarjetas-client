import React, { useEffect, useState } from "react";
import { fetchTarjetas } from "../../api/TarjetaAPI";

function TarjetaSelector( props ) {

  const [tarjetas, setTarjetas] = useState([]);
  const handleSeleccionTarjeta = props.handleSeleccionTarjeta;


  useEffect(() => {
    fetchTarjetas()
      .then((response) => {
        setTarjetas(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="tarjeta-item">
      <h2>Seleccionar tarjeta</h2>
      <select onChange={handleSeleccionTarjeta} >
        {tarjetas.map((tarjeta) => {
          return (
            <option key={tarjeta.idTarjeta} value={tarjeta.idTarjeta}>
              {tarjeta.nombre}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default TarjetaSelector;
