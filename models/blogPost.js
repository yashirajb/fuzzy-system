const mongoose = require('mongoose');


//Schema (dummy data)

const Schema = mongoose.Schema; 
const BlogPostSchema = new Schema({
     title: String,
     body: String,
     date: {
         type: String,
         default: Date.now()
     }
});

//Model

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// Here we want to export the model BlogPost
module.exports = BlogPost; 