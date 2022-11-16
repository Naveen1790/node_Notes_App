// const fs = require("fs");
const chalk = require("chalk");
const { argv } = require("yargs");
const yargs = require("yargs");
const {
  getNotes,
  addNotes,
  removeNote,
  listNotes,
  readNotes,
} = require("./notes");

// const { isEmail, isURL } = require("validator");

// const add = require("./utils");

// // fs.writeFileSync("notes.txt", "Hi this is node js tutorial");

// // //challenge 1:- append a message using appendFileSync method

// // fs.appendFileSync("notes.txt", "\tThe data which Im appending as challenge 1");

// const sum = add(2, 10);

// console.log(sum);

//challenge:2 -> create notes.js, retur your notes.., export and import in this file

console.log(getNotes());

// console.log(validator.isEmail("pnaveen147gmail.com"));

// console.log(
//   isEmail("pnaveen147@gmail.com"),
//   isURL("https://www.w3schools.com")
// );

// console.log(chalk.red("Sucess!!"));

// console.log(chalk.red.bold("Hello", chalk.underline.bgBlue("world") + "!"));

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding Notes!!");
// } else if (command === "remove") {
//   console.log("Removing notes!!");
// }

// console.log(process.argv);

yargs.command({
  command: "add",
  describe: "Add a notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true, //if you mention it then you need to pass title from an input value
      type: "strng", //if you don't mention this line and if you try to pass empty title it will give boolean value
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    // console.log("Adding a note", argv);
    // console.log(`Title: ${argv.title}`);
    // console.log(`Body: ${argv.body}`);
    addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Remove note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    // console.log("Removing a Note!!");
    removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "list a note",
  // handler: () => console.log("Listing a Note!!"),
  handler() {
    listNotes();
  },
});
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "Read note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log("Reading a Note!!");
    readNotes(argv.title);
  },
});

// console.log(yargs.argv); // if you don't mention this line then above will not print any value
//if you do not want to print 69 line and run above code then use below code
yargs.parse(); // this will parse to above code and perform operations accordingly
