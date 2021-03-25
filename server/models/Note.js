const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    note: {
        type: String,
        required: true
    },
    signature: {
        type: String,
        required: true
    }
});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;