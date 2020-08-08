const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

//Initialize the express application 

const app = express();
const PORT = process.env.PORT || 8080;


const routes = require('./routes/api')

//Connect to mongoose
//Takes two params, the first is for the length of the connection, either local or remote
//the second param takes in options that you can pass to MongoDB

mongoose.connect('mongodb://localhost/yashira', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Lets us know the connection has been successfully made
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});

//HTTP request logger
app.use(morgan('tiny')); 
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));