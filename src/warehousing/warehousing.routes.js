import { Router } from "express";
import { check } from "express-validator";
import { createTask, updateTask, deleteTask, getAllTasks} from "./warehousing.controller.js";
const routesWarehousing = Router();

routesWarehousing.post("/createTask", [], createTask);

routesWarehousing.put("/updateTask/:id", [], updateTask);


routesWarehousing.delete("/deleteTask/:id", [], deleteTask);

routesWarehousing.get("/getTask", [], getAllTasks);

export default routesWarehousing;
