import { conexion } from "../database/database.js";


export const listarUsuario = async (req, res) => {

    try {
        let sql = "select * from usuarios"
        const [resultado] = await conexion.query(sql)
        res.status(200).json(resultado)
    } catch (error) {
        res.status(500).json({ "mensaje": "error en consultar tabla de usuarios", error })
    }
}


export const store = (req, res) => {
    res.status(200).json(req.body)
}


export const listarById = async (req, res) => {
    try {

        let id = req.params
        let sql = `select * from usuarios where =${id}`

        const [resultado] = await conexion.query(sql)

        res.status = 200
        res.json(resultado)

    } catch (error) {
        res.status = 500
        res.json({ 'mensaje': 'error al buscar al usuario', error })
    }
}