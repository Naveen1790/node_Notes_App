const chalk = require("chalk");
const fs = require("fs");
const getNotes = () => {
  return "Your notes...";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("new object has been added to the array"));
  } else {
    console.log(
      chalk.red.inverse("title is already been existed in the notes.json file")
    );
  }
};

const removeNote = (title) => {
  const notesData = loadNotes();
  const notesToKeep = notesData.filter((note) => {
    return note.title !== title;
  });
  if (notesData.length > notesToKeep.length) {
    console.log(chalk.green(`${title} note has been removed`));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red("No Note is removed"));
  }
};

const listNotes = () => {
  const notesList = loadNotes();
  notesList.forEach((note) => console.log(note.title));
};

const readNotes = (title) => {
  const notesRead = loadNotes();
  //   console.log(notesRead);
  const data = notesRead.find((note) => note.title === title);
  if (data) {
    console.log(chalk.inverse(data.title));
    console.log(data.body);
  } else {
    console.log(chalk.red.inverse("No Note found"));
  }
};

const saveNotes = (notes) => {
  const dataStr = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataStr);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = { getNotes, addNotes, removeNote, listNotes, readNotes };
