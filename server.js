const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

//Initialize the express application 

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));

app.get('hey', (req, res) => {
    const data = {
        username: 'beth',
        age: 17
    }
    res.json(data);
}); 

app.get('/api/name', (req, res) => {
    const data = {
        username: 'seth',
        age: 71
    }
    res.json(data);
}); 

app.listen(PORT, console.log(`Server is starting at ${PORT}`));