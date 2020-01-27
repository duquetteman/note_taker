var path = require("path");

// module.exports allows this module to be used in other js files. 
module.exports = function(app) {

    // these html routes help direct the user. This controls what page is delivered to the user. 

    // app.get - Send files using express and node. 

    // When the user hits notes, show them the notes.html page. 
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "/notes.html"));
    });

    app.get("../assets/js/index.js", function(req, res){
        res.sendFile(path.join(__dirname, "/assets/js/index.js"))
    });
    app.get("../assets/css/styles.css", function(req, res){
        res.sendFile(path.join(__dirname, "/assets/css/styles.css"))
    });

    // GET "*" - Will return the "/index.html" file
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/index.html"));
      });
}