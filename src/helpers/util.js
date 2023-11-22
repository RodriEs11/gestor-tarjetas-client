
export const formatearFecha = (fechaCompleta) => {

    let fecha = new Date(fechaCompleta);

    return new Intl.DateTimeFormat('es-AR').format(fecha);
}

export const formatearFechaHora = (fechaHoraCompleta) => {

    const opciones = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
    };

    return new Intl.DateTimeFormat('es-AR', opciones).format(fechaHoraCompleta);

}

export const isStringVacio = (string) => {

    return string.length === 0;
}

