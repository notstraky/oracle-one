alert("¡Bienvenida y bievenido a nuestro sitio web!");

// let nombre = "Luna";
// let edad = 25;
// let numeroDeVentas = 50;
// let saldoDisponible = 1000;
let error = ("¡Error! Completa todos los campos");

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");

if (nombre == '' && edad == ''){
    alert(error)
}

if (edad >=18 ) {
    alert("¡Puedes obtener tu licencia de conducir!");
} else {
    alert("Eres menor de edad, aún no puedes tener licencia.");
}

