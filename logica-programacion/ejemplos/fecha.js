function esFechaValida(fecha) {
    return !isNaN(Date.parse(fecha));
}

const fechaValida = esFechaValida("2024-01-17");
console.log(fechaValida);