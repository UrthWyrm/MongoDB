var people = require("../controllers/people");

module.exports = function(app){

    app.get("/", people.index)

    app.get("/new/:name", people.addPerson)

    app.get("/remove/:name", people.removePerson)

    app.get("/:name", people.details)
}