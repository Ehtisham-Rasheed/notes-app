const chalk  = require("chalk");
const fs = require("fs");


//function to add the note.
const addNote = (title, body) =>
{
     const notes = loadNotes();
  
     const duplicateNotes = notes.find((note) => note.title === title);

     debugger;

     if(!duplicateNotes)
     {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New Node added"));
     }
     else
     {
       console.log(chalk.red.inverse("Note Title Taken!"));
     }
    
}

const listNotes = () => 
{
    const notes = loadNotes();
    console.log(chalk.inverse("Your Notes"));
    notes.forEach((note) => console.log(note.title));  
}

//function to remove the note.
const removeNote = (title) => 
{
   const notes = loadNotes();
   const newNotes = notes.filter((note) => note.title !== title);  

   if(notes.length > newNotes.length)
    {
      console.log(chalk.green.inverse("Note Removed"));
    }
    else
    {
       console.log(chalk.red.inverse("No Note Found"));
    }

   saveNotes(newNotes);
}

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if(note)
  {
      console.log(chalk.inverse(note.title));
      console.log(note.body);
  }
  else{
     console.log(chalk.red.inverse("Note not found!"));
  }

}

const saveNotes = (notes) =>
{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes =() => 
{
    try
    {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e)
    {
        return [];
    }
}




module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}