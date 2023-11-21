//AUTORES

const API_URI = "/api";

export const AUTORES = `${API_URI}/autores`;
export const AUTORES_AGREGAR = `${API_URI}/autores/agregar`;
export const AUTORES_EDITAR = `${API_URI}/autores/editar`;

export const AUTOR_OBTENER_TOTAL = (idAutor) => {
    return `${AUTORES}/${idAutor}/total-a-pagar`
}


export const TARJETAS = `${API_URI}/tarjetas`;
export const TARJETAS_AGREGAR = `${API_URI}/tarjetas/agregar`;
export const TARJETAS_EDITAR = `${API_URI}/tarjetas/editar`;

export const TARJETA_OBTENER_TOTAL = (idTarjeta) => {
    return `${TARJETAS}/${idTarjeta}/total-a-pagar`
}


export const CONSUMOS = `${API_URI}/consumos`;
export const CONSUMOS_AGREGAR = `${API_URI}/consumos/agregar`;
export const CONSUMOS_EDITAR = `${API_URI}/consumos/editar`;

export const CONSUMOS_PAGAR_PROXIMA_CUOTA = (idDetalleCuotas) => {
    return `${API_URI}/consumos/pagar-proxima-cuota/${idDetalleCuotas}`;
} ;

