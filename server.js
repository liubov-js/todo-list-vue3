const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/todos', (req, res) => {
  fs.readFile('./db.json', {encoding: 'utf-8'}, (err, data) => {
    if (err) res.status(500).send('Error getting data');
    res.status(200).send(JSON.parse(data).todos);
  });
});

app.post('/todos', (req, res) => {
  fs.readFile('./db.json', {encoding: 'utf-8'}, (err, data) => {
    if (err) res.status(500).send('Error getting data');
    const db = JSON.parse(data);
    db.todos.push(req.body);
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) res.status(500).send('Error saving data');
      res.status(200).send(req.body);
    });
  });  
});

app.put('/todos/:id', (req, res) => {
  fs.readFile('./db.json', {encoding: 'utf-8'}, (err, data) => {
    if (err) res.status(500).send('Error getting data');
    const db = JSON.parse(data);
    let currentTodo = db.todos.find(todo => todo.id === Number(req.params.id));
    currentTodo.isCompleted = req.body.isCompleted;
    currentTodo.task = req.body.task;
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) res.status(500).send('Error saving data');
      res.status(200).send(req.body);
    });
  });  
});

app.delete('/todos/:id', (req, res) => {
  fs.readFile('./db.json', {encoding: 'utf-8'}, (err, data) => {
    if (err) res.status(500).send('Error getting data');
    const db = JSON.parse(data);
    db.todos = db.todos.filter(todo => todo.id !== Number(req.params.id));
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) res.status(500).send('Error deleting data');
      res.status(200).send('Success');
    });
  });  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
