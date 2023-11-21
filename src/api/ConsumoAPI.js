import {fetchApi} from "../helpers/fetchApi";

async function fetchConsumos() {

  const URL_CONSUMOS = "/api/consumos/";

  return await fetchApi(URL_CONSUMOS);
 
}


export { fetchConsumos };
