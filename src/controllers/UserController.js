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

// funcion para registrar datos a la base de datos por metodo post
export const store = async (req, res) => {

    try {
        let { nombres, direccion, telefono, correo, rol, password } = req.body


        let sql = `insert into usuarios ( nombres, direccion, telefono, correo, rol, password)
        values ('${nombres}','${direccion}','${telefono}','${correo}','${rol}','${password}')`
        /*  console.log(sql) */
        const [resultado] = await conexion.query(sql)
        if (resultado.affectedRows > 0) {
            return res.status(200).json({ "mensaje": "se registro con exito" })
        } else {
            res.status = 404
            res.json({ 'mensaje': 'no se registro el usuario' })
        }

    } catch (error) {
        res.status(500).json({
            'mensaje': 'error al conectar a la base de datos => ',
            'error': error.message,
            'estado': 500
        })
    }

}


export const eliminarUsuario = async (req, res) => {

    try {
        let id_usuario = req.params.id_usuario


        let sql = `delete from usuarios where idusuario = ${id_usuario}`

        const [resultado] = await conexion.query(sql)
        if (resultado.affectedRows > 0) {
            return res.status(200).json({ 'mensaje': 'se elimino con exito' })
        } else {
            res.status = 404
            res.json({ 'mensaje': 'no se elimino el usuario' })
        }
    } catch (error) {
        res.status(500).json({ 'mensaje': 'error al conectar a la base de datos => ' + error.message })
    }
}




export const actualizarUsuario = async (req, res) => {

    try {
        let { nombres, direccion, telefono, correo, rol, password } = req.body
        let id = req.params.id

        let sql = `update usuarios set  nombres = '${nombres}', direccion = '${direccion}' , telefono ='${telefono}', correo = '${correo}', rol = '${rol}', password = '${password}' 
        where idusuario = ${id}`
        /*  console.log(sql) */
        const [resultado] = await conexion.query(sql)
        if (resultado.affectedRows > 0) {
            return res.status(200).json({ "mensaje": "se actualizo con exito" })
        } else {
            res.status = 404
            res.json({ 'mensaje': 'no se actualizo el usuario' })
        }

    } catch (error) {
        res.status(500).json({
            'mensaje': 'error al conectar a la base de datos => ',
            'error': error.message,
            'estado': 500
        })
    }

}



export const listarById = async (req, res) => {
    try {

        let id = req.params.id
        let sql = `select * from usuarios where idusuario =${id}`

        const [resultado] = await conexion.query(sql)

        res.status = 200
        res.json(resultado)

    } catch (error) {
        res.status = 500
        res.json({ 'mensaje': 'error al buscar al usuario', error })
    }
}