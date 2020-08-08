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

## Refactoring server.js code

1. Saved unrefactored server.js code to a text file for future reference

2. Created a models folder and then created blogPost.js file. 

3. Moved schema and model code from server.js file inside blogPost.js file. 

4. Required mongoose inside blogPost.js file and module.exported the BlogPost model so it can be used wherever it's needed.

5. Created a routes folder and routes.js file inside folder where api's will be created. 

6. Required express and set up use of express routers

7. Once router was set up, I module.exported the router for use wherever it's needed. 

8. Moved all the routes from the server.js file into the api.js file 

9. Changed every instance of app.get to router.get

10. Required the BlogPost model from blogPost.js into the api.js file to enable the use of the model (BlogPost.find) in the get route.

11. Brought the routes from api.js into the server.js file 

12. Inside the same server.js file, took the newly added route and configured it, placing it right below app.use(morgan)

13. Deleted all dummy data contained in the server.js file 

14. To test that everything works, ran server 
and server is successfully getting back data from api routes

15. In api.js file, I took a look at the /api routes and deleted the api starting point, leaving / in place. I then moved into the server.js file and placed api behind the backslash in app.use-->app.use('/api, routes);

## REACT

