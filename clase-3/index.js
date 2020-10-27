
const mongoose = require('mongoose')
const express = require ('express')

const app = express()
const PORT = 4000

const user = 'jaazrdz'
const password = '93jaz626'
const db = 'b46DB'

const MONGO_URI = `mongodb+srv://${user}:${password}@cluster0.skyoi.mongodb.net/${db}?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

    .then(res => console.log(`MongoDB connected at db: ${res.connections[0].name}`))
    .catch(err => console.log(err))

const CartoonSchema = new mongoose.Schema({
    name: String,
    releaseYear: Number,
    img_url: {
        type: String,
        default: 'https://www.tonica.la/__export/1592148570601/sites/debate/img/2020/06/14/bob-esponja-parte-de-la-comunidad-lgbtq.jpg_423682103.jpg',
    },
    origin_country: String,
    author: String
})

const Cartoon = mongoose.model('Cartoons', CartoonSchema)

app.use (express.json({ extended: true}))


/*
spongeBob = {
    name: "SpongeBob SquarePants",
    releaseYear: 1996,
    img_url: "https://www.tonica.la/__export/1592148570601/sites/debate/img/2020/06/14/bob-esponja-parte-de-la-comunidad-lgbtq.jpg_423682103.jpg",
    origin_country: "US",
    author: "Stephen Hillenburg"
}

*/

app.get('/', (req,res) =>{
    res.json({message: 'Bienvenido a mi api, prueba crear una caricatura en el endpoint /cartoon/create'})
})
/*
const saveCartoon = async(res)=>{
    console.log(cartoonDoc);
    return cartoonDoc
}

*/

app.post ('/cartoon/create', async (req,res) =>{
    req.body
    const newCartoon = new Cartoon (body)
    const cartoonDoc = await newCartoon.save()
    res
    .status(201)
    .json({
        message: 'Se ha guardado una caricatura nueva en la DB'
        cartoon : cartoonDoc
    })
})
app.listen (PORT, ()=>{
    console.log(`Server initialized on PORT: http//localhost:${PORT}`)
})
/*
const newCartoon = new Cartoon(spongeBob)
    .then(res => console.log(res))
    .catch((err) => console.log(err));
*/