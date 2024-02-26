import express from 'express'
import bodyparser from 'body-parser'

import rutaUser from './src/routes/usuariosRoute.js'
import playsRoute from './src/routes/juegosRoute.js'


const app = express()
const port = 3000


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).send("<h3>Bienvenido</h3>")
})

/* app.use(ruta) */

app.use('/user',rutaUser)

app.use('/juegos', playsRoute)



app.listen(port, () => {
    console.log(`servidor escuchando http://localhost:${port}`)
})

