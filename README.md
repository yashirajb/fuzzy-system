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

1. Deleted everything inside app.js file

2. Imported react into app.js file, defined class App, created render function, set up JSX return, and exported the component.

3. Continuing in App.js, I began building a form, created classNames, created first div with an input and input values, a second div with a textarea and textarea values, and a submit button. 

4. Next I focused on taking the user input and sending the value of the input to the server. I set state to contain the value of the input (title and body). I then added these values (this.state.title and this.state.body) to the value fields in the input and textarea divs respectively. 

5. Added a function to all of the inputs so as the user is typing the state is updated. This required the creation of a handleChange function which is the function responsible for updating state. I then passed this handleChange function into the onChange functions in input and textarea.

6. Passed in event param to the handleChange function since the event has access to the entire event that is coming in from the DOM. 

7. Added event.target which gets the value of the current element that is firing the event, which would be the input form. 

8. Retrieved from the input target by creating a variable for name and for value. Then I updated state with these values(see this.setState).

9. Console.logged the state with 'State': and this.state, and checked that state updates in the browser. 

10. Went back into App.js and attached an event to the form by creating a submit function which will take all the data it needs and send it to the server. 

11. Attached onSubmit to the form, added e.preventDefault to stop the browser from refreshing. Created a payload which contains the data I want to send to the server--contains title and body that is coming from the state. 

12. Imported axios and placed it in the App.js file to make the http call. Placed the url, post request(get), and set the data, which is payload. To know if the data has been successfully sent, I added promises as well. 

13. To find out where the data is being sent, I looked back in the api.js file and created a post route. Instead of sending data on this route, I sent the message "We recieved your data" to let the client know their data has been successfully recieved. 

14. Went back into App.js and defined the port where the server is waiting, which is port 8080 in the url portion of axios(), and because I wanted to hit the post route, I put /api/save after localhost:8080. 

15. Went into the browser to check the connection and recieved an "Oops, there's an error" message. That's because there are two different servers (port 3000 and port 8080) that are running and they aren't in the same domain, so they can't access resources or data within the same origin. If they arent in the same domain, they can't access data within the same origin, and that's when the CORS error pops up. 

16. To solve this I went into the client folder and then inside the package.json file. Inside this file I added a proxy of localhost:8080. Adding this proxy meant I no longer needed the reference to the full url in the App.js file (under axios). Now all the requests made will go on port 3000, and I modified the url in App.js to reflect this. 

17. Resolved CORS policy, recieved a ReferenceError concerning undefined data variable so defined data as req.body in api.js file to fix ReferenceError (see commented out notes in api.js or here: //without defining data you will get an error--->ReferenceError: data is not defined
at router.post (/Users/Yashira/Desktop/accime/mernApp/routes/api.
const data = req.body; ), but still needed to resolve why console logged Body: undefined when I made a post request (input information into the title and body of my app). In order for the body of the request to not come back as undefined, I needed to add app.use to my server.js file as middleware for both json and urlencoded. Once I added both middleware pieces to my server.js file, the console no longer showed the body of my request as being undefined, but instead showed Body:  { title: 'khashfjks', body: 'sjdhfkshfa' }. All the data coming in as json or urlencoded is now being made available and the data is able to be consumed.  

18. Now I needed to take the data coming in from req.body and save it into the database by using the model I created earlier in the app's development (const BlogPost = mongoose.model('BlogPost', BlogPostSchema);). I placed this model into the portion of my api.js code that indicates I want to save to the database (the router.post section). I created a newBlogPost variable and set it to a new instance of the BlogPost model, and I passed this new instance the data (const newBlogPost = new Blogpost(data)). Finally, I added .save to the newly created newBlogPost variable. I then created a callback within newBlogPost.save() that either let the user know there was an error or told the user their data had been saved, moving the res.json(data), which I changed to res.json({msg: 'Data has been saved!'}), into the callback if their data had been saved successfully. 

19. Refreshed browser to check that newly added code is working. Console showed input data was saved successfully with status code 200 message. Checked Robo 3T to see if data saved there and the data saved there as well. At this point everything is working end to end. 


## Refactoring code

1. Went into App.js file and inside the handleChange and changed this: 
handleChange = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      this.setState({
        [name]: value
      });
    };

    to this: 
    
   handleChange = ({ target }) => {
      const { name, value } = target; 
       this.setState({[name]: value });
    };

    So now I'm going to get the event from the target, getting the name and the value that are coming in. 

2. Went into api.js file and inside the callback and changed this: 

newBlogPost.save((error) => {
        if(error){
            res.status(500).json({
                msg: 'Sorry, internal server error'
            });
        }else {
            // res.json(data);
            res.json({
                msg: 'Data has been saved!'
            });
        }
});

to this: 

newBlogPost.save((error) => {
        if(error){
            res.status(500).json({msg: 'Sorry internal server error'
            });
            return;
        } res.json(data);
            res.json({
                msg: 'Data has been saved!'
            });
        }
});
  
I added return to the status 500 callback so the lines will stop executing and removed the else statement. Also added return to res.json data saved message. This is to eliminate the previous if else statement. 

3. Inside App.js added a resetUserInputs function and set state to empty for title and empty for body. Now, when resetUserInputs is called, it will reset the user. Now, the function can be called aften the .then callback telling us data has been sent to the server. 
Now in the browser console under "Data has been sent" I see "State:  {title: "", body: ""} ". State and body have been successfully emptied after submit is clicked. 

## Fetching data from MongoDB to display on the page

1. Went into the browser at localhost:8080/api and saw port 8080 is still workind and all data is still being displayed on the page. To get the displayed data to the client, I went back into the app.js file and created a getBlogPost function (inserted below state and above handleChange) to get the data from the server. Used axios.get and used promises in case the data didn't fetch. In a real world application this isn't the most proper way to error handle, but for now this will do. Also passed in response and created data variable to hold response.data. 

2. In same file I added posts to state, setting posts to an empty array. 

3. Went into getBlogPost function and added this.setState with the data from the posts. So now, every time I want to get all the posts, I just call the getBlogPost function and the posts are fetched. 

4. I created a componentDidMount function to solve WHEN I would call the getBlogPost function, and that's after the component mounts. So now, the componentDidMount function calls the getBlogPost function. 

5. When I refreshed the browser, I could see all of the posts (16 at the time) listed under the posts click down tab in the browser console: 
App.js:71 State:  {title: "", body: "", posts: Array(16)}
App.js:25 Data has been recieved!

6. Still in the App.js file, I went inside the render function, and after the form element I added a div and created a function within that div that would render all the posts. Before doing that inside the div, I went just above the render function and created a displayBlogPosts function that would contain all the posts if there were any to return, and posts.length would check to see if there are any posts, and if it's empty it would retun null and stop the function. If it's not empty the function would proceed with looping through each post, and a div that would contain the title and the details of the post. Also added a div key which must be added when looping over an element, and added post.title to h3 and post.body to p tags as well. 

7. From there, I went back into the render function and called the just-created diplayBlogPosts function and passed it the list of the posts that I was getting back from state, or (this.state.posts). 

8. I ensured that any saved posts would show in the browser without the browser needing to be refreshed by going back to my resetUserInputs call and placing a this.getBlogPost call right underneath. After the form is submitted and everything goes well, the getBlogPost call will execute and get the latest post from the database. 


## Pushing to Heroku

1. Checked to make sure I had the Heroku CLI installed by typing heroku --version in the command line. 

2. Logged into Heroku via the command line by typing heroku login 

3. After logging in, I went back inside the server.js file to check I was using the proper port. Port should be: const PORT = process.env.PORT || 8080. If port 8080 is not available Heroku can choose a different port that's available to run the application.

4. Checked my database connection and put an "add-on" on my mongoose.connect by adding process.env.MONGODB_URI || . to try and use Heroku first, and if not I can use my localhost ('mongodb://localhost/yashira') for development. 

5. Created a custom variable and set the node.env value to production. This is how we will know that our application is on Heroku. I'll be setting a custom variable related to this step a bit later. 

6. Placed the client into the server by first going into (cd-ing) the client folder on the command line and typing npm run build. 

7. To place the build folder inside the server, I added app.use(express.static('client/build')) inside the if statement set to production I created to confirm the app is on Heroku. 

8. I went inside the package.json (the package at the root, not the package in the client folder) and wrote the following scripts, placing them above the "start" script:  
"build": "cd client && npm run build",
"install-client": "cd client && npm install",
"heroku-postbuild": "npm run install-client && npm run build"

A note about the script names: The names of scripts "build" and "heroku-postbuild" must be used. The name "install-client" is one that can be altered to whatever name desired, it's not standard. All commands the script names point to, however, must be used to ensure deployment is successful. 

9. Ensured that "start" command was present in the package.json file and that it was pointing to "node server.js" so Heroku can run the application. 

10. Went inside the client folder and checked that it didn't contain a git folder. If I did see a folder was there, I would run the command rm -rf .git to remove the folder. 

11. Went to the root of the app and created a gitignore file. Added node_modules to the file so git won't track it. 

12. In console typed heroku create mernappyashira

13. My application did not yet have an addon, so I needed to make sure my app has an add-on connected to MongoDB to enable use of MongoDB through Heroku. 

14. To do this, ran command heroku addons:create mongolab:sandbox in terminal. To check that addon was created successfully I ran heroku addons --all in the terminal and ⬢ mernappyashira was listed as having an addon. 

15. Added everything to git and ran Heroku locally first before pushing it to Heroku officially by typing heroku local in the command line 