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

module.exports = router;
