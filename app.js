const express = require('express');


const PORT = 5000;
const app = express();
const task = require("./Routes/task");
const category = require("./Routes/category");

app.listen(PORT, () => {
    console.log('App listening on port : ' + PORT);
});

app.get('/', (req, res) => {
    res.send("Initial point");
});

app.use(express.json());

app.use('/task', task);

app.use('/category', category);