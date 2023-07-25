
const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes.js");

//Customize yargs version:
yargs.version("1.1.0")

//Create add command
yargs.command({
    command: "add",
    describe: "Add new note",
    builder: {
        title:{
           describe: "Note titile",
           demandOption: "true",
           type: "string"
        },
        body:{
            describe: "it is the body",
            demandOPtion: "true",
            type: "string"
        }
    },
    handler(argv)
    {
        notes.addNote(argv.title, argv.body);
    }
})

//Create remove command 
yargs.command({
    command: "remove",
    describe: "remove a note",
    title:{
        describe: "Note titile",
        demandOption: "true",
        type: "string"
    },
    handler(argv)
    {
        notes.removeNote(argv.title);
    }
})

//Create list command
yargs.command({
    command: "list",
    describe: "list the note",
    handler()
    {
        notes.listNotes();
    }
})

//Create read command
yargs.command({
    command: "read",
    describe: "read the note",
    builder:{
        title:{
          describe: "Note title",
          demandOption: true,
          type: "string"
        }
    },
    handler(argv)
    {
        notes.readNotes(argv.title);
    }
})




yargs.parse();






