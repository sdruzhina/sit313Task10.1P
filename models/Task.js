const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true,
            enum: ['CHOICE', 'DECISION', 'SENTENCE'],
            default: 'CHOICE'
        },
        expiry: {
            type: Date,
            required: true,
            trim: true
        },
    }
)

module.exports  =  mongoose.model("Task", taskSchema)
