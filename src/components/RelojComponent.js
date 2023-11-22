import React, { useEffect, useState } from 'react'
import { formatearFechaHora } from '../helpers/util';

const Reloj = () => {
  const [horaActual, setHoraActual] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setHoraActual(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <p>{formatearFechaHora(horaActual)}</p>
    </div>
  );
};

export default Reloj;