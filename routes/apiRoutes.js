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
    // * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    // * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
    app.post("/api/notes", function (req, res) {
        console.log("test");
        var newNote = req.body;
        noteData.push(newNote);
        let parsedata = JSON.stringify(noteData)
        fs.writeFile(path.join('db.json'), parsedata, (err) => {
            if (err) throw err;
        })
        // Display database in json format.
        res.json(noteData);
    });

 