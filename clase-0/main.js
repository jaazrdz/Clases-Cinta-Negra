
/*
{
    var Saludo = 'Hola'
    let Destinatario = 'Gunter' 
};
console.log(Saludo + Destinatario)

*/

//const edad = 23
//edad += 1

//console.log(edad);

/*const dog = {
    name: 'Gunter',
    age: 2 
};

dog.name = 'Firulais';
console.log(dog)*/

//let x = 30, let y = 5
//console.log(x % y);
//console.log(x);
//x = x + y
//x %= y;

// Estas operaciones son equivalentes
/*
x++
x+= 1
x= x + 1
*/

//const booleano = false;
//const undef = undefined;
//const voidValue = null;
/*
if(booleano){
console.log( 'En caso de verdadero')
}else {
console.log( 'En caso de falso')
};
*/

//const name = 'Gunter '
//console.log( 1 !== '1');

/*
for (let i = 0; i < 10; i++) {
    const element = array[index];
    
};
*/
/*
function sayHi(){
    return 'Hey'
}

const hi = sayHi();
console.log(hi);
*/
// Funciones dentro de objetos----

//const sayHi = function(){
//  return 'Hey'
//}

//const sayHi = () => 'Hey'
/*
const dog = {
    name: 'Gunter',
    ladrar : function(){
        return 'Hola estoy ladrando en español' + this.name
    },
};
*/

/*
const dog = {
    name: 'Gunter',
    ladrar : () => {
        return 'Hola estoy ladrando en español y mi nombre es ' + dog.name
    },
};
console.log(dog.ladrar());
console.log(sayHi())



// Funcion que me de el promedio de un arreglo 

const ages = [24, 25, 26, 27];
let i = 0;

i++

console.log(ages[0]);
*/

// Imprimir todos los números naturales multipos de 5 como 'Fizz', multiplos de 3 como 'Buzz' y 
// multiplos de 3 y de 5 como 'FizzBuzz'
/*

function FizzBuzz{
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} Fizzbuzz`);
        } else if () {

        }
}
}

console.log(i);

// Operador Ternario 

//Lo que quieres comparar si se cumple imprime ---- es verdadero  y sino imprime ---- es falso
(1 < 3 ? 'Es verdadero' : 'Es falso')
*/

//2. Obtener de un arreglo el string con mayor número de caracteres
/*
const chartList = ["Hola", "hola123", "123"]

const  getMaxLenghtString = (array) => {
    let maxLenghtString = ""
    for (let index = 0; index < chartList.length ; index++) {
        let currentString = array[index]
        if (currentString.length > maxLenghtString.length) {
            maxLenghtString = currentString
        }
    }
    return maxLenghtString
}    

console.log(getMaxLenghtString(chartList));
*/
//3.Crear una lista de calificaciones del 0 al 10 y obtener el promedio

const claseA = [6, 7, 8, 3, 10, 10, 7, 6, 7];
const claseB = [5, 7, 5, 8, 9, 10, 7, 9, 10];

const mean = (list) => {
    let sum = 0
    for (let i = 0; i < list.length; i++) {
        sum += list[i];

    }
    return (sum / list.length).toFixed(2)
}
const avgClaseA = mean(claseA)
const avgClaseB = mean(claseB)

console.log(avgClaseA);



//4. Con la misma lista, obtner la mediana

const ordenarLista = claseA.sort( (a,b) => a-b);
const media = ordenarLista [i]  / 2

console.log( media)



//4. Con la misma lista, obtner la moda 

