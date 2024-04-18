import express from 'express'
import bodyparser from 'body-parser'

import rutaUser from './src/routes/usuariosRoute.js'
import playsRoute from './src/routes/juegosRoute.js'
import RutaAuth from './src/routes/Autenticacion.js'

/* hola desde la rama dev */
const app = express()
const port = 3000

app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.status = 200
    res.json({ 'mensaje': 'Bienvenido a api de juegos' })
})

/* app.use(ruta) */

// ruta para acceder a las funciones del UserController
app.use('/user', rutaUser)

// ruta para acceder a las funciones del PlayController
app.use('/juegos', playsRoute)

app.use('/documents', (req, res) => {
    res.render('documentacion.ejs')
})

app.use(RutaAuth)


app.listen(port, () => {
    console.log(`servidor escuchando http://localhost:${port}`)
})
