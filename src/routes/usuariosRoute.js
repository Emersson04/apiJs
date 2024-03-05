import { Router } from "express";
import { listarById, store } from "../controllers/UserController.js";
import { listarUsuario } from "../controllers/UserController.js";

const rutaUser = Router()

rutaUser.get('/listar', listarUsuario)
rutaUser.post('/registrar', store)
rutaUser.get('/listaru/:id/user', listarById)


export default rutaUser