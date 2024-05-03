import WareHousing from "./warehousing.model.js";
import { request, response } from "express";

export const createTaskk = async (req, res) => {
  const {
    taskName,
    descriptionTask,
    dateTask,
    dateTaskEnd,
    progressTask,
    priorityTask,
    userTask,
  } = req.body;

  try {
    const task = new WareHousing({
      taskName,
      descriptionTask,
      dateTask,
      dateTaskEnd,
      progressTask,
      priorityTask,
      userTask,
    });

    await task.save();

    res.status(200).json({
      msg: "Tarea agregada exitosamente",
      task,
    });
  } catch (error) {
    console.error("Error al agregar la tarea: ", error);
    res.status(400).json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { _id, statusTask, ...resto } = req.body;

  try {
    const task = await WareHousing.findById(id);

    if (!task) {
      return res.status(404).json({ msg: "Tarea no encontrada" });
    }

    await WareHousing.findByIdAndUpdate(id, resto);
    const task11 = await WareHousing.findOne({ _id: id });

    res.status(200).json({ msg: "Tarea actualizada exitosamente", task11 });
  } catch (error) {
    console.error("Error al actualizar la tarea: ", error);
    res.status(400).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await WareHousing.findById(id);

    if (!task) {
      return res.status(404).json({ msg: "Tarea no encontrada" });
    }

    res.status(200).json({ msg: "Tarea eliminada exitosamente" });
  } catch (error) {
    console.error("Error al eliminar la tarea: ", error);
    res.status(400).json({ error: error.message });
  }
};
