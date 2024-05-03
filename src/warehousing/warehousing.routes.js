import { Router } from "express";
import { check } from "express-validator";
import { typePriority } from "../middlewares/validation-Priority.js";
import { validateProgressTask } from "../middlewares/validation-Progress.js";
import {
  createTaskk,
  updateTask,
  deleteTask,
} from "./warehousing.controller.js";
const routesWarehousing = Router();

routesWarehousing.post(
  "/createTask",
  [
    check("priorityTask").custom(typePriority),
    check("progressTask").custom(validateProgressTask),
  ],
  createTaskk
);

routesWarehousing.put("/updateTask/:id", [], updateTask);

routesWarehousing.delete("/deleteTask/:id", [], deleteTask);

export default routesWarehousing;
