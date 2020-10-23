const { response, query } = require('express');
const express = require('express')

const app = express()

const PORT = 4000;

app.get('/', (request, response) => {
    response.send('Bienvenid@ al app')
})

app.get('/perro', (request, response) => {
    response.json({ 'Bienvenido a Perrolandia'})
})

app.get('/pokemon/:id/move/:moveId', (request, response) => {
    const {id} = request.params
    axios.get(`http://:pokeapi.co/api/v2/pokemon/${id}`{
        .then(pokeApiResponse =>{
            response.json ({
        })
        
    })
})

app.get('/search', (request, response) => {
    const { color, } = request.query
    response.json({
        queries
    })
})

app.listen(PORT, () => {
    console.log(`Server initialized on PORT: http://localhost: ${PORT}`)
});