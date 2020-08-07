## Mern Stack App

### 

1. Used command npx-create-react-app client to create React front-end

2. CDed into client folder and ran command npm start to check react install was successful 

3. Ran npm init at root to install mongoose, express, axios, and morgan

4. Opened server file to require express, mongoose, and morgan. Also required path (a built-in node module that comes with node.js, so no install necessary)

5. Initialized the express application and defined a port using process.env.port(we need this port defined for Heroku deployment)

6. Started using one of the packages (morgan) with app.use. Morgan is not necessary, however it is an HTTP request logger so it will log HTTP requests inside the terminal for view as they come

7. Began defining routes starting with a get route that sends json data (username and age) back to the client, and set this route to /api

8. Defined a second route in the same manner (with different username and age) and set it to /api/name

9. Set up app.listen which will listen on the port defined earlier and will console.log each request that comes in

10. Verified everything is working in terminal using node server.js command



