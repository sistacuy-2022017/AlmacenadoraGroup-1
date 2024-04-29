import { Router } from "express";
import { check } from "express-validator";
import { createTask, getTasks, updateTask, deleteTask } from "./warehousing.controller.js";
const routesWarehousing = Router();

routesWarehousing.post("/createTask", [], createTask);

routesWarehousing.get('/', [], getTasks);

routesWarehousing.put("/updateTask/:id", [], updateTask);


routesWarehousing.delete("/deleteTask/:id", [], deleteTask);



export default routesWarehousing;
