#!/usr/bin/env node
import yargs from 'yargs';
import pg from 'pg';
const { Pool } = pg;

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
let taskId;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "test",
    password: "", //DO NOT COMMIT THIS TO GITHUB
    port: 5432
})

// add new task to db
if (options.new) {
    // ensure the task name is short enough to fit in the database
    if (options.new.length < 50) {
        pool.query(`INSERT INTO task_list(task_name,completion)values('${options.new}',false)`, (err,res)=> {
            pool.end();
        });
    } else {
        console.log("Error, task must be less than 50 characters");
    }
}

// list all tasks in the db
if (options.list) {
    if (Boolean(options.list) == true) {
        let list = pool.query(`SELECT * FROM task_list`)
        list.then((value) => {
            console.log(value.rows);
        }) //fetch all tasks from db
    }
}

// mark a task as complete 

// remove a task from the table
if (options.delete) {
    if (typeof(options.delete) == "number") {
        pool.query(`DELETE FROM task_list WHERE id=${options.delete}`)
    } else {
        console.log("Error, task id must be a number")
    }
}

// print instructions to the console

// print version of the script to console

//task: id, taskName, completion status