import { Router } from "express";
import { check } from "express-validator";
import { validateProgressTask } from "../middlewares/validation-Progress.js";
import { typePriority } from '../middlewares/validation-Priority.js'
import { createTask, updateTask } from "./warehousing.controller.js";
const routesWarehousing = Router();

routesWarehousing.post("/createTask", [], validateProgressTask, typePriority, createTask);

routesWarehousing.put("/updateTask/:id", [], updateTask);


export default routesWarehousing;
