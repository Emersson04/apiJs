import { json } from "express";
import { conexion } from "../database/database.js";


const listarUsuario = async (req, res) => {

    try {
        let sql = "select * from usuarios"
        const [resultado] = await conexion.query(sql)
        res.status(200).json(resultado)
    } catch (error) {
        res.status(500).json({ "mensaje": "error en controlador usuario", error })
    }
}


export const store = (req, res) => {
    res.status(200).json(req.body)
}

export default listarUsuario
