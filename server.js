const mongoose = require('mongoose');
const express = require('express');
const bodyParse = require('body-parser');
const Todo = require('./model/todo');

const app = express();
app.use(bodyParse.json());

mongoose.connect('mongodb://localhost:27017/todo');
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     // we're connected!
// });

app.get('/todos', (req, res) => {
    console.log('todo get :', req.body);
    res.send('Hello Todo App');
});


app.post('/todos', (req, res) => {
    console.log('todo post :', req.body);
    var newTodo = new Todo({
        text: req.body.text
    });
    newTodo.save().then((doc) => {
        console.log('Saved todo:', doc);
        res.send(doc);
    }, reason => {
        console.log('Unable to save todo:', reason);
        res.status(400).send(400);
    });
});


app.listen(3000, function () {
    console.log('Server started on port 3000');
});