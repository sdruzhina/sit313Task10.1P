var express  = require('express');
var router = express.Router();
const https = require("https");
const bodyParser = require("body-parser");
const Requester = require("../models/Requester");
const Task = require("../models/Task");


// Get all tasks
router.get('/requester/tasks', (req, res) => {
    Task.find((err, taskList) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(taskList);
        }
    });
});

// Create a new task
router.post('/requester/tasks', (req, res) => {

    // TODO: change 
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    const task = new Task({ 
        requesterId: '5f765a458f54040004e70a61', // TODO - change to current user
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        responses: req.body.responses,
        master: req.body.master,
        numberWorkers: req.body.numberWorkers,
        reward: req.body.reward,
        expiry: expiry,         // TODO 
        createdAt: Date.now()   // TODO 
    });
    task.save((err) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ 
                status: 'success', 
                message: 'Task successfully added.' 
            })
        }
    });
});

module.exports = router;
