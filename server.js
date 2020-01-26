// Express makes routing easy with node.js
const express = require("express");
// Creating a variable app whixh is eaula to express so we can easily call it later. 
const app = express();

// Create a variable called port that will take the route that it is assigned by a deployment site, like Heroku, or it will use port 8000 for local host testing. 
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listen for the server and console.log the port number. Console.log so the user knows it's working. 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });