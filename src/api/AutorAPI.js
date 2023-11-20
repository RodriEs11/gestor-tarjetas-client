import {fetchApi} from "../helpers/fetchApi";

const {AUTORES, AUTOR_OBTENER_TOTAL} = require("../helpers/ApiRoutes");

function fetchAutores() {

  return fetchApi(AUTORES);
 
}

function obtenerPagarTotalAutor(idAutor){

  return fetchApi(AUTOR_OBTENER_TOTAL(idAutor))
}


export { fetchAutores, obtenerPagarTotalAutor};
