// Imports Go Here ///////////////////////////////////////////////////////////////
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Configurations Go Here ////////////////////////////////////////////////////////
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database Goes Here ////////////////////////////////////////////////////////////
mongoose.connect("mongodb://localhost/restful-task-CRUD");
require("./server/config/mongoose.js");

// Routes Go Here ////////////////////////////////////////////////////////////////
require("./server/config/routes.js")(app);
// 

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
// // Retrieving All Tasks /////////////////////////////////////////////////////////////
// app.get('/tasks', function (req, res) {
//     console.log("Retrieve all task route")
//     Task.find({}, function (err, users) {
//         if (err) {
//             console.log("Error: ", err)
//             res.json({ message: "Error", error: err })
//         } else {
//             res.json({ message: "Success", data: users })
//         }
//     })
// })
// // Retrieve Task By ID /////////////////////////////////////////////////////////////
// app.get('/tasks/:id/', function (req, res) {
//     User.findOne({ _id: req.params.id }, function (err, user) {
//         if (err) {
//             console.log({ message: "Error", error: err })
//         } else {
//             res.json({ message: "Success", data: user })
//         }
//     })
// })
// // Creating A New Task /////////////////////////////////////////////////////////////
// app.post('tasks/new', (req, res) => {
//     console.group("Post Data")
//     console.table(req.body);
//     console.groupEnd();
//     Task.addTask(req.body, (err, task) => {
//         if (true) {
//             console.log("Something went wrong: ", err);
//             res.json({"Message": "Error", "err": err})
//         } else {
//             console.log("Success");
//             res.json({
//                 "Message": "Success",
//                 "task": task,
//             });
//         }
//     })
// });

// // Updating A Task By ID //////////////////////////////////////////////////////////
// app.put('/task/:id', (req, res) => {
//     Task.findOneAndUpdate({ _id: req.params.id },
//         { $set: { title: req.body.title, description: req.body.description, completed: req.body.completed}}, {multi: false}
//         , function (err, task) {
//         if (err) {
//             console.log("Error: " , err)
//             res.json({message: "Error", error: err})
//         } else {

//             res.json({message: "Success", task: task})
//         }
//     })
// })

// // Deleting A Task /////////////////////////////////////////////////////////////////
// app.delete('/task/:id/', function (req, res) {
//     Task.findByIdAndRemove({_id: req.params.id}, function (err, user) {
//         if (err) {
//             console.log("Error: ", err)
//             res.json({ message: "Error", error: err })
//         } else {
//             res.json({ message: "Success", data: task })
//         }
//     })
// });

// Port Goes Here /////////////////////////////////////////////////////////////////
app.listen(8000, function() {
    console.log("Listening on port: 8000");
})