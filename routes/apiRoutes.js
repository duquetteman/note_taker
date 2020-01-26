const fs = require("fs")
const path = require("path");

var noteData;
// module.exports allows this module to be used in other js files. 
module.exports = function (app) {
    // read the file system for the db.json database file that stores the notes. 
    fs.readFile("db.json", "utf8", function (err, data) {
        if (err) throw err;
        noteData = JSON.parse(data);
    })
