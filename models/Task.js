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
        responses: {
            type: Map,
            of: String
        },
        master: {
            type: Boolean
        },
        numberWorkers: {
            type: Number,
            default: 1
        },
        reward: {
            type: Number
        },
        expiry: {
            type: Date,
            required: true,
        },
        createdAt: {
            type: Date,
        }
    }
)

module.exports  =  mongoose.model("Task", taskSchema)
