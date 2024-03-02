#!/usr/bin/env node
import yargs from 'yargs';
import express from 'express';


// run node js server
const app = express();

app.get("/", function (req, res) {
    res.sendFile("/Users/noa/Documents/code/postgresql-crud-todo-list/index.html");
});
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});

// define commands for the application

const options = yargs
    .usage("")
    .option("n", { alias: "new", describe: "Add a new task to the list", type: "string", demandOption: false })
    .option("l", { alias: "list", describe: "List all tasks on the to do list", type: "string", demandOption: false})
    .option("m", { alias: "mark", describe: "Mark a task as completed. Follow with task ID", type: "number", demandOption: false })
    .option("d", { alias: "delete", describe: "Remove an item from the todo list", type: "number", demandOption: false })
    .option("h", { alias: "help", describe: "Lists commands accepted by the application", type: "string", demandOption: false })
    .option("v", { alias: "version", describe: "Print version of the application to console", type: "string", demandOption: false })
    .argv;

const taskList = [];

