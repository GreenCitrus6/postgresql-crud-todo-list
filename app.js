#!/usr/bin/env node
import yargs from 'yargs';
import { Pool, Client } from 'pg';

// define commands for the application

const options = yargs
    .usage("node . -n <Add new task; string> -l <List currently stored tasks; boolean> -m <Mark a task as complete or incomplete; number> -d <Delete a task from the list; number> -h <Show a list of commands the app takes with explanations; boolean> -v <Show the current version of the app; boolean>")
    .option("n", { alias: "new", describe: "Add a new task to the list", type: "string", demandOption: false })
    .option("l", { alias: "list", describe: "List all tasks on the to do list", type: "boolean", demandOption: false})
    .option("m", { alias: "mark", describe: "Mark a task as completed. Follow with task ID", type: "number", demandOption: false })
    .option("d", { alias: "delete", describe: "Remove an item from the todo list", type: "number", demandOption: false })
    .option("h", { alias: "help", describe: "Lists commands accepted by the application", type: "boolean", demandOption: false })
    .option("v", { alias: "version", describe: "Print version of the application to console", type: "boolean", demandOption: false })
    .argv;

const taskList = [];
// insert the url to your database below
const dbUrl = "";

// add new task to db
if (options.new) {
    // ensure the task name is short enough to fit in the database
    if (options.new.length < 50) {
        
    } else {
        console.log("Error, task must be less than 50 characters");
    }
}

// list all tasks in the db
if (options.list) {


}

// mark a task as complete 

// remove a task from the table

// print instructions to the console

// print version of the script to console