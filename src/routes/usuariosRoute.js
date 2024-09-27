import { Router } from "express";
import { actualizarUsuario, listarById, store } from "../controllers/UserController.js";
import { listarUsuario } from "../controllers/UserController.js";
import { eliminarUsuario } from "../controllers/UserController.js";

import { validarToken } from "../controllers/Autenticacion.js";

const rutaUser = Router()

rutaUser.get('/listar', validarToken, listarUsuario)
rutaUser.post('/registrar', validarToken, store)
rutaUser.delete('/eliminar/:id_usuario', eliminarUsuario)
rutaUser.put('/actualizar/:id', actualizarUsuario)



rutaUser.get('/listar/:id', listarById)


export default rutaUser