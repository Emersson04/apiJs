import { Router } from "express";
import { store } from "../controllers/UserController.js";
import listarUsuario from "../controllers/UserController.js";

const rutaUser = Router()

rutaUser.get('/listar', listarUsuario)
rutaUser.post('/registrar', store)


export default rutaUser