// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calcularIMC(altura, peso) {
    console.log((peso / (altura*altura)).toFixed(2));
}


// Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(n) {
    // Declaro variables
    let respuesta = 1;
    let i = 1;
    // Evaluo que se ejecute siempre y cuando mi contador sea menor o igual al número
    while (i <= n) {
        respuesta *= i; // Multiplico el contador por su valor anterior en cada iteración.
        i++;
    }

    console.log(respuesta);
}


// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function conversorDolarAColones(monto) {
    // 1 dolar = monto actual en colones.
    let dolar = 513.50;
    console.log(monto * dolar);
}


// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function calcularMedidasRectangulo(altura, anchura) {
    console.log(`El perimetro de la sala es de ${altura * 2 + anchura * 2} y el área es de ${altura * anchura}`)
}

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function calcularMedidasCirculo(radio){
    console.log(`El perimetro es ${(Math.PI * radio * 2).toFixed(2)} y el area es ${(Math.PI * radio ** 2).toFixed(2)}`)
}

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicar(n) {
    let i = 1;
    while (i <= 10) {
        console.log(`${n} * ${i} = ${n * i}`);
        i++
    }
}


calcularIMC(1.68, 65);
factorial(7);
conversorDolarAColones(500);
calcularMedidasRectangulo(30, 50);
calcularMedidasCirculo(4);
tablaMultiplicar(1);