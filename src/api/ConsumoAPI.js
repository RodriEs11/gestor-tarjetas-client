import {fetchApi} from "../helpers/fetchApi";

async function fetchConsumos() {

  const URL_CONSUMOS = "/api/consumos/all/";

  return await fetchApi(URL_CONSUMOS);
 
}

async function fetchConsumosByIdTarjeta(idTarjeta) {


  const URL_CONSUMOS_BY_ID_TARJETA = `/api/consumos/tarjeta/${idTarjeta}`;

  return await fetchApi(URL_CONSUMOS_BY_ID_TARJETA);
 
}



export { fetchConsumos, fetchConsumosByIdTarjeta };
