export const validateProgressTask = (req, res, next) => {
    const { progressTask } = req.body;
    const allowedValues = ['pending', 'in progress', 'completed'];
  
    if (!allowedValues.includes(progressTask)) {
      return res.status(400).json({ error: "The value of Progress Task is invalid" });
    }
  
    next();
};