export const typePriority = (req, res, next) => {
    const { priorityTask } = req.body;

    if (!priorityTask) {
        return res.status(400).JSON({ message: 'You must select a priority'});
    }

    if (priorityTask !== 'low' && priorityTask !== 'medium' && priorityTask !== 'high') {
        return res.status(400).JSON({ message: 'The selected priority is not valid'});
    }

    next();
} 