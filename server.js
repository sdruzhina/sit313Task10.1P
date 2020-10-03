const express = require("express");
const bodyParser = require("body-parser");
const Requester = require("./models/Requester");
const mongoose = require("mongoose");
const workerApi = require("./api/worker-api");

// Bcrypt
const bcrypt = require('bcrypt');

const app = express()
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(workerApi);

mongoose.connect("mongodb+srv://sergei:Deakin2020@cluster0.t3ayv.mongodb.net/iCrowdTaskDB?retryWrites=true&w=majority", 
    {useNewUrlParser: true, useUnifiedTopology: true})

// Entry point - login page
app.get('/', (req, res) => {
    res.render('reqlogin.ejs', { err: [], email: null });
})

// Tasks page
app.get('/reqtask', (req, res) => {
    res.sendFile(__dirname + '/reqtask.html');
})

let port = process.env.PORT;
if (port == null || port == '') {
  port = 8080;
}

app.listen(port, (req, res)=>{
    console.log('Server is running successfully on port ' + port);
})