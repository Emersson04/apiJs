import { Router } from "express";
import listarJuegos from "../controllers/PlayController.js";

const playsRoute = Router()


playsRoute.get('/listar', listarJuegos)

export default playsRoute