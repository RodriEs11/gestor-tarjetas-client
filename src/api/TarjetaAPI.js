import {fetchApi} from "../helpers/fetchApi";

async function fetchTarjetas() {

  const URL_TARJETAS = "/api/tarjetas/";

  return await fetchApi(URL_TARJETAS);
 
}

async function fetchTarjetaById(id){
  const URL_TARJETA_BY_ID = `/api/tarjetas/${id}`;

  return await fetchApi(URL_TARJETA_BY_ID);
}
export { fetchTarjetas, fetchTarjetaById};
