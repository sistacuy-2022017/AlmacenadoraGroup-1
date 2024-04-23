import WareHousing from './warehousing.model';
import { request, response } from 'express';

export const createTask = async (req, res) => {
    const { taskName, descriptionTask, dateTask, dateTaskEnd, preorityTask, statusTask, userTask } = req.body;

    try {
        const task = new WareHousing({ taskName, descriptionTask, dateTask, dateTaskEnd, preorityTask, statusTask, userTask });

        await task.save();

        res.status(200).json({
            msg: 'Tarea agregada exitosamente',
            task
        });
    } catch (error) {
        console.error('Error al agregar la tarea: ', error);
        res.status(400).json({ error: error.message });
    }
};
