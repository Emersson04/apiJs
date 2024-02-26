import { conexion } from "../database/database.js";

const listarJuegos = async (req, res) => {
    try {
        let juegos = "select * from juegos"
        const [lJuegos] = await conexion.query(juegos)

        if (lJuegos.length > 0) res.status(200).json(lJuegos)

        else res.status(404).json({ "mensaje": "no se encontro usuarios" })

    } catch (error) {
        res.status(500).json({ 'mensaje': 'error al encontrar el usuario ' })
    }
}


export default listarJuegos