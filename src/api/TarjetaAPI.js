import {fetchApi} from "../helpers/fetchApi";

const {TARJETAS, TARJETA_OBTENER_TOTAL} = require("../helpers/ApiRoutes");

async function fetchTarjetas() {

  return await fetchApi(TARJETAS);
 
}


async function obtenerPagarTotalTarjeta(idTarjeta){


  return await fetchApi(TARJETA_OBTENER_TOTAL(idTarjeta));
}


export { fetchTarjetas, obtenerPagarTotalTarjeta};
