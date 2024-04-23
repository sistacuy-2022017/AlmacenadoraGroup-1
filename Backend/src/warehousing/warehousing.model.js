    import mongoose, { Schema } from "mongoose";

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
    priorityTask: {
        type: String,
        required: true
    },
    statusTask: {
        type: String,
        required: true
    },
});

export default mongoose.model('WareHousing', warehousingSchema);