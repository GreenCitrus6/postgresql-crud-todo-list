#!/usr/bin/env node
import yargs from 'yargs';

// define commands for the application

const options = yargs
    .usage("")
    .option("n", { alias: "new", describe: "Add a new task to the list", type: "string", demandOption: false })
    .option("l", { alias: "list", describe: "List all tasks on the to do list", type: "boolean", demandOption: false})
    .option("m", { alias: "mark", describe: "Mark a task as completed. Follow with task ID", type: "number", demandOption: false })
    .option("d", { alias: "delete", describe: "Remove an item from the todo list", type: "number", demandOption: false })
    .option("h", { alias: "help", describe: "Lists commands accepted by the application", type: "boolean", demandOption: false })
    .option("v", { alias: "version", describe: "Print version of the application to console", type: "boolean", demandOption: false })
    .argv;

const taskList = [];

// add new task to db
if (options.new) {

}

// list all tasks in the db
if (options.list) {


}

// mark a task as complete 

// remove a task from the table

// print instructions to the console

// print version of the script to console