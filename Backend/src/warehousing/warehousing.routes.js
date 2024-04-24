import { Router } from "express";
import { check } from "express-validator";
import { createTask, updateTask } from "./warehousing.controller.js";
const routesWarehousing = Router();

routesWarehousing.post("/createTask", [], createTask);

routesWarehousing.put("/updateTask/:id", [], updateTask);


export default routesWarehousing;
