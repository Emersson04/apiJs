import { Router } from "express";
import { actualizarUsuario, listarById, store } from "../controllers/UserController.js";
import { listarUsuario } from "../controllers/UserController.js";
import { eliminarUsuario } from "../controllers/UserController.js";

const rutaUser = Router()

rutaUser.get('/listar', listarUsuario)
rutaUser.post('/registrar', store)
rutaUser.delete('/eliminar/:id_usuario', eliminarUsuario)
rutaUser.put('/actualizar/:id', actualizarUsuario)



rutaUser.get('/listar/:id', listarById)


export default rutaUser