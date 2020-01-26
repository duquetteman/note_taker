const bodyParser = require('body-parser');
const express = require('express');
var path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())

// require('./app/routing/api-routes.js')(app);
// require('./app/routing/html-routes.js')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
