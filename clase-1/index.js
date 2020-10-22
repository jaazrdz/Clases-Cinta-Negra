/*
let MathCalif = 9
const Promesa = new Promise((resolve, reject) => {
    if (MathCalif === 10) {
        resolve('Nuevo Cel')
    } else {
        reject('Sigue participando muajaja ')
    }
});

Promesa
    .then(res => {
        console.log(res)
    })
    .catch(res => {
        console.log(res)
    })
    .finally(() => {
        console.log('Siempre aunqe se cumpla o no')
    })

console.log('Mensaje sincrono')

*/

import axios from 'axios'

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))



const getDitto = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}


getDitto()

// 1. Hacer una consulta a la poke api y desde una funcion que se llame getPokemonByID (150)
// 2. Hacer una consulta a la poke api y desde una funcion que se llame getPokemonMovesByID (150) // powepunch
// 2. Hacer una funcion que contenga los asteroides potencialmente peligroso para la tierra, NASA API

