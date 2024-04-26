export const typeTareas = (req, res, next) => {
    const { task } = req.body;

    if (!task) {
        return res.status(400).json({ message: 'You must select a priority' });
    }

    if (task !== 'low' && task !== 'medium' && task !== 'high') {
        return res.status(400).json({ message: 'The selected priority is not valid' });
    }

    next();
};