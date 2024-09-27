import { Router } from "express";
import { validarUsuarios } from "../controllers/Autenticacion.js";

const RutaAuth = Router()

RutaAuth.post('/login', validarUsuarios)


export default RutaAuth