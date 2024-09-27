import { conexion } from "../database/database.js"
import jwt from "jsonwebtoken"

export const validarToken = async (req, res, next) => {
  let token = req.headers["token"]

  if (!token) {
    res.status(402).json({ "Mensaje": "se requiere token" })
  }
  else {
    const decoded = jwt.verify(token, process.env.AUTH_SECRET, (error, decoded) => {
      if (error) {
        res.status(402).json({ "Mensage": "token no valido" })
      }
      else {
        next()
      }
    })
  }
}

export const validarUsuarios = async (req, res) => {
  try {
    let { correo, password } = req.body

    if (!correo && !password) {
      return res.status(400).json({ message: "Correo y Contraseña son requeridos" });
    }

    let sql = `select nombres, rol from usuarios where correo = '${correo}' and password = '${password}'`
    const [resultado] = await conexion.query(sql)


    if (resultado.length > 0) {

      let token = jwt.sign({ user: resultado }, process.env.AUTH_SECRET, { expiresIn: process.env.TIME })

      res.status(200).json({
        "mensaje": "usuario autorizado",
        user: resultado,
        token: token
      })
    }
    else res.status(404).json({ "Mensaje": "Usuario no autorizado" })




  } catch (error) {
    res.status(500).json("Error en el servidor")
  }
}