const express = require("express");
const bodyParser = require("body-parser");
const Requester = require("./models/Requester");
const mongoose = require("mongoose");
const requesterApi = require("./api/requester-api");
const cors = require("cors");

const app = express()
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(cors());
app.use(requesterApi);

mongoose.connect("mongodb+srv://sergei:Deakin2020@cluster0.t3ayv.mongodb.net/iCrowdTaskDB?retryWrites=true&w=majority", 
    {useNewUrlParser: true, useUnifiedTopology: true})

// Entry point - login page
app.get('/', (req, res) => {
    res.redirect('/requester/tasks');
})

let port = process.env.PORT;
if (port == null || port == '') {
  port = 8080;
}

app.listen(port, (req, res)=>{
    console.log('Server is running successfully on port ' + port);
})