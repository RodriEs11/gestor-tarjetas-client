const fetchApi = (url) => new Promise((resolve, reject) => {

  fetch(url).then((response) => {

    if (!response.ok) throw new Error("No se pudo obtener conexión con la API");

    resolve(response.json());

  }).catch((error) => {

    console.log("Error al obtener datos", error);
    reject(error);
  })


})

export { fetchApi };