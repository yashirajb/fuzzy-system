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

router.get('/name', (req, res) => {
    const data = {
        username: 'seth',
        age: 71
    }
    res.json(data);
}); 


module.exports = router; 