const express = require('express');

const router = express.Router();

//import this so we can start using the BlogPost model below
const BlogPost = require('../models/blogPost');

//Routes
router.get('/', (req, res) => {
    // const data = {
    //     username: 'beth',
    //     age: 17
    // };

    BlogPost.find({})
        .then((data) => {
            console.log('Data:', data)
            res.json(data);
        })
        .catch((error) =>{
            console.log('error:', error)
        });


}); 

router.post('/save', (req, res) => {
    console.log('Body: ', req.body)

    //without defining data you will get an error---ReferenceError: data is not defined
    // at router.post (/Users/Yashira/Desktop/accime/mernApp/routes/api.
    const data = req.body;  
//New instance of the model (BlogPost) that will hold data so I can use .save
const newBlogPost = new BlogPost(data)

//.save

newBlogPost.save((error) => {
        if(error){
            res.status(500).json({
                msg: 'Sorry, internal server error'
            });
        return;
        } // res.json(data);
            return res.json({
                msg: 'Data has been saved!'
            });
        });
 
}); 


router.get('/name', (req, res) => {
    const data = {
        username: 'seth',
        age: 71
    }
    res.json(data);
}); 


module.exports = router; 