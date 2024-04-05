import { conexion } from "../database/database.js"

export const validarUsuarios = async (req, res) => {
  try {
    let { correo, password } = req.body

    let sql = `select nombres, rol from usuarios where correo = '${correo}' and password = '${password}'`

    const [resultado] = await conexion.query(sql)

    if (resultado.length > 0) {
      res.status(200).json(resultado)
    }
    else res.status(404).json({ "Mensaje": "Usuario no autorizado" })
  } catch (error) {
    res.status(500).json("Error en el servidor")
  }
}