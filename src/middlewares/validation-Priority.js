export const typePriority = (req, res, next) => {
    const { priority } = req.body;

    if (!priority) {
        return res.status(400).JSON({ message: 'You must select a priority'});
    }

    if (priority !== 'low' && priority !== 'medium' && priority !== 'high') {
        return res.status(400).JSON({ message: 'The selected priority is not valid'});
    }

    next();
} 