// Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];
console.log(listaGenerica);

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
console.log(lenguagesDeProgramacion);
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function verLista() {
    console.log(lenguagesDeProgramacion);
}

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function verListaInversa() {
    console.log(lenguagesDeProgramacion.reverse());
}

// Crea una función que calcule el promedio de los elementos en una lista de números.

let listaNum = [120, 40, 50, 80, 90];

function promedioLista() {
    let sumador = 0;
    for (let i = 0; i < listaNum.length; i++){
        sumador += listaNum[i];
    }
    return sumador / listaNum.length;
}

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function mayorMenor() {
    // Se usa la libreria Math.max y .min para evaluar la lista y el operador spread (...) para descomponer el arreglo en argumentos individuales.
    console.log(`El número mayor es ${Math.max(...listaNum)} y el menor es ${Math.min(...listaNum)}`);
}


// Crea una función que devuelva la suma de todos los elementos en una lista.

function sumador() {
    let suma = 0
    for (let i = 0; i < listaNum.length; i++) {
        suma += listaNum[i];
    }
    return suma;
}

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.


function posicionLista(elemento) {
    // El método indexOf() busca el indice elemento en el array para determinar su posición.
   let posicion = lenguagesDeProgramacion.indexOf(elemento);
   return posicion;
}

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

let lista1 = [2, 4, 5, 6];
let lista2 = [2, 4, 5, 6];


function sumarListas(lista1, lista2) {
    // Verificar que ambas listas tengan el mismo tamaño, sino enviar error.
    if (lista1.length != lista2.length) {
        throw new Error('Las listas deben tener el mismo tamaño');
    }
    // Creación de la nueva lista vacía.
    const resultado = [];
    // Iteración a través de los elementos de las listas
    for (let i = 0; i < lista1.length; i++) {
        // Suma los elementos uno a uno y los añade a la nueva lista.
        resultado.push(lista1[i] + lista2[i]);
    }

    return resultado;
}


// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

// Lista de ejemplo
let lista3 = [2,5,6,7,8];

function cuadradoLista(lista) {
    // Declaración de la nueva lista vacía.    
    let listaCuadrado = [];
    // Recorre los elementos de la lista
    for (i = 0; i < lista.length; i++) {
        // Añade el resultado del cuadrado de cada elemento a la nueva lista.
        listaCuadrado.push(lista[i] * lista[i]);
    }

    // Retorna la nueva lista.
    return listaCuadrado;
}