import { Router } from "express";
import { check } from "express-validator";
import { createTask, updateTask, deleteTask } from "./warehousing.controller.js";
const routesWarehousing = Router();

routesWarehousing.post("/createTask", [], createTask);

routesWarehousing.put("/updateTask/:id", [], updateTask);


routesWarehousing.delete("/deleteTask/:id", [], deleteTask);



export default routesWarehousing;
