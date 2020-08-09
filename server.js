const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

//Initialize the express application 

const app = express();
//Heroku Step 1 check
const PORT = process.env.PORT || 8080;


const routes = require('./routes/api')

//Connect to mongoose
//Takes two params, the first is for the length of the connection, either local or remote
//the second param takes in options that you can pass to MongoDB

//Heroku Step 2 check: 
mongoose.connect(process.env.MONGODB_URI ||
    'mongodb://localhost/yashira', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Lets us know the connection has been successfully made
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});

//Data parsing middleware being used in express to 1. parse json 2. parse url, set to false which considers how deeply to go into the object. 
//False recognizes that the object is not that deep, you may want to use true if you have a very deep object. 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Heroku Step 3: 
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

//HTTP request logger
app.use(morgan('tiny')); 
app.use('/api', routes);




app.listen(PORT, console.log(`Server is starting at ${PORT}`));