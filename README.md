## Mern Stack App

### Terminal: 

1. Used command npx-create-react-app client to create React front-end

2. CDed into client folder and ran command npm start to check react install was successful 

3. Ran npm init at root to install mongoose, express, axios, and morgan

### Server.js:

4. Opened server file to require express, mongoose, and morgan. Also required path (a built-in node module that comes with node.js, so no install necessary)

5. Initialized the express application and defined a port using process.env.port(we need this port defined for Heroku deployment)

6. Started using one of the packages (morgan) with app.use. Morgan is not necessary, however it is an HTTP request logger so it will log HTTP requests inside the terminal for view as they come

7. Began defining routes starting with a get route that sends json data (username and age) back to the client, and set this route to /api

8. Defined a second route in the same manner (with different username and age) and set it to /api/name

9. Set up app.listen which will listen on the port defined earlier and will console.log each request that comes in

10. Verified everything is working in terminal using node server.js command

11. Ran nodemon server.js so server will automatically refresh 

## Mongoose and MongoDB 
### Mongoose is an object data model for MongoDB

1. Checked to see if MongoDB is installed by running the command 'which mongo'. 

2. Went into server file to add mongoose.connect for connection to mongoose (required in the beginning of server file setup)

3. Added mongoose.connect.on listener to let us know the connection has been made successfully. 

4. Began building mongoose schema in server file and kept it in server file to see everything at once, will be moved to different file later

5. Defined mongoose model using mongoose.model. Passed in the name of the model as the first param and the schema we previously created (BlogPostSchema) as the second param

6. With model created I began saving data into the mongo database by first defining data with a simple title and body.

7. Created a newBlogPost instance based on the BlogPost model previously created. Passed the previously created data variable into the newBlogPost instance.

8. Saved newly created newBlogPost instance of the model using .save, which takes a callback in case of an error.

9. Checked the console and dummy data has been successfully saved.

10. Set up a route to consume the data so whenever the user hits the /api route, data from the database is sent (not dummy data).Required me to comment out newBlogPost.save and instead add the BlogPost model to the /api route using .find (BlogPost.find)

11. Wrote arrow functions for .then() and .catch()., .then() returning the data and .catch() returning an error. 

12. Opened up route in the browser to check that data returned successfully. Although dummy data was still showing in the browser, the console was showing the data contained in the database. 

13. To enable the new data to show in the browser, I removed the "old" data 
  const data = {
        username: 'beth',
        age: 17
    };
    and moved res.json inside BlogPost.find(), placing it under the .then() callback

14. To see the data, I installed Robo 3T which is a desktop graphical user interface (GUI) that allows for more visual interaction with the data. 

## Refactoring the server.js code

1. Saved unrefactored server.js code to a text file for future reference

2. Created a models folder and moved Schema code from server.js file inside

3. 

