import {fetchApi} from "../helpers/fetchApi";

const {AUTORES} = require("../helpers/ApiRoutes");

function fetchAutores() {

  return fetchApi(AUTORES);
 
}


export { fetchAutores};
