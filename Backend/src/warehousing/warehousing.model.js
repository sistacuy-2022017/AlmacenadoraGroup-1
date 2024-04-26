import mongoose, { Schema } from "mongoose";

const typePriority = {
    values: ['low', 'medium', 'high'],
};

const progressTaskXDD = {
    values: ['pending', 'in progress', 'completed'],
};


const warehousingSchema = new Schema({
    taskName: {
        type: String,
        required: true
    },
    descriptionTask: {
        type: String,
        required: true
    },
    dateTask: {
        type: Date,
        required: true
    },
    dateTaskEnd: {
        type: Date,
        required: true
    },
    userTask: {
        type: String,
        required: true
    },
    progressTask: {
        type: String,
        enum: progressTaskXDD,
        required: true
    },
    priorityTask: {
        type: String,
        enum: typePriority,
        required: true
    },
    statusTask: {
        type: String,
        required: true,
        default: true
    },
});

export default mongoose.model('WareHousing', warehousingSchema);