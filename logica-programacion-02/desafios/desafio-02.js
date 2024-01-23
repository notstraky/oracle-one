function helloWorld() {
    console.log('Hello World');
}

function saludo(nombre) {
    console.log('Hola ' + nombre);
}

function dobleNumero(n) {
    console.log(n*2);
}

function promedio(a,b,c) {
    console.log((a + b + c) / 3);      
}

function numMayor(a, b) {
    if (a > b){
        console.log(a);
    } else {
        console.log(b);
    }
}

function multiplicarMismoNum(n) {
    console.log(n * n);
}

helloWorld();
saludo('Andrew');
dobleNumero(3);
promedio(4,2,5);
numMayor(20,3);
multiplicarMismoNum(4);