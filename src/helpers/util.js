
export const formatearFecha = (fechaCompleta) => {
    let fecha = new Date(fechaCompleta);

    let dia = fecha.getUTCDate();
    let mes = fecha.getUTCMonth() + 1; // Los meses comienzan desde 0
    let anio = fecha.getUTCFullYear();

    dia = (dia < 10) ? '0' + dia : dia;
    mes = (mes < 10) ? '0' + mes : mes;

    var fechaFormateada = dia + '/' + mes + '/' + anio;

    return fechaFormateada
}



export const isStringVacio = (string) => {

    return string.length === 0;
}

