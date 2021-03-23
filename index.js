var express = require('express');
var app = express();
const port = 5000;


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://zine85:1234@cluster0.bevhz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
.then(() => console.log('mongoDB Connected....')).catch(err => console.log(err));


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello worldewqeqwewq');
});

app.listen(port, () => console.log(`run app listening on port ${port}!`))