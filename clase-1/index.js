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


const axios = require('axios')

const getDitto = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => console.log(res.data.name))
        .catch(err => console.log(err))
}

getDitto()


// 1. Hacer una consulta a la poke api y desde una funcion que se llame getPokemonByID (150)

const getPokemonByID = (id) =>{
    return axios.get ('https://pokeapi.co/api/v2/pokemon/' + id)
    .then ((res) => {
        return res.data
    })
    .catch ((err) => {
        return err
    })
}

console.log(getPokemonByID(12))

*/


// 2. Hacer una consulta a la poke api y desde una funcion que se llame getPokemonMovesByID (150) // powepunch
// 2. Hacer una funcion que contenga los asteroides potencialmente peligroso para la tierra, NASA API
/*
const request = require('request');

const getAsteroids = (year, month, day) => {
    const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${year}-${month}-${day}&end_date=${year}-${month}-${day}&api_key=DEMO_KEY`;

    return new Promise((resolve, reject) => {
        request(URL, (error, response, body) => {
            const json = JSON.parse(body)

            if (!error && response.statusCode === 200) {
                // Aquí no hay error
                const asteroids = json.near_earth_objects[`${year}-${month}-${day}`];
                const res = asteroids.filter((value) => value.is_potentially_hazardous_asteroid);
                const res2 = res.map((value) =>`${value.id}:${value.name} ${value.is_potentially_hazardous_asteroid}`)
                resolve(res);

            } else {
                reject('Ocurrio un error desconocido')
            }
        }                            
    }
}     


getAsteroids('2020', '06', '24')
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

*/


// funcion que traiga el nombre y planeta de nacimiento


const axios = require('axios')

const getName = () => {
    axios.get('https://swapi.dev/api/people')
        .then(res => console.log(res.data.name))
        .catch(err => console.log(err))
}

const getPlanet = () => {
    axios.get('https://swapi.dev/api/people')
        .then(res => console.log(res.data.homeworld.name))
        .catch(err => console.log(err))
}
const nuevoPersonaje = `Hola mi nombre es ${getName} y vivo en ${getPlanet}` ;

console.log(nuevoPersonaje)