// let porcentajeDescuento = 0;

// if (cantidadMillas > 30000) {
//     porcentajeDescuento = 20;
// } else if (cantidadMillas > 5000) {
//     porcentajeDescuento = 10;
// } else {
//     porcentajeDescuento = 0;
// }


let porcentajeDescuento = 0;

if (cantidadDeMillas > 30000) {
    porcentajeDescuento = porcentajeDescuento + 20;
} else {
    if (cantidadDeMillas > 5000) {
        porcentajeDescuento = porcentajeDescuento + 10;
    }
}
