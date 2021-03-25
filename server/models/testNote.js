const Note = require('./Note');

console.log(Note);

const userInput = {
    note: 'This is a noice note',
    signature: 'Pie419'
};

const note = new Note(userInput);

note.save((err, document) => {
    if (err) console.log(err);
    
    console.log(document);
});
