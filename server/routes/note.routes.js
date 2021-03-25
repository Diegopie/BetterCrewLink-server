const noteRouter = require('express').Router();
const { Note } = require('../models');

// * Print Errors and Create Response Object 
const handleError = (message, route, err, msgError) => {
    if (route && err) console.log({ route }, err);
    return {
        message: {
            msgBody: message,
            msgError: msgError
        }
    };
};


// * Create New Todo
noteRouter.post('/new', (req, res) => {
    const note = new Note(req.body);
    note.save(err => {
        if (err) res.status(500).json(
            handleError('Error Saving Note in Database', '/api/note/new', err, true)
        );
        else {
            res.status(200).json(
                handleError('Successfully Saved Note', '/api/note/new', err, false)
            );
            // req.user.save(err => {
            //     if (err) res.status(500).json(
            //         handleError('Error Updating User With New Todo', '/api/todo/new', err, true)
            //     );
            //     else res.status(200).json(
            //         handleError('Successfully Saved Todo', '/api/todo/new', err, false)
            //     );
            // });
        }
    });
});

// ** Get All Todos
noteRouter.get('/all', (req, res) => {
    Note.find({}, (err, notes) => {
        // console.log(notes);
        if (err) res.status(500).json(
            handleError('Error Has Occurred in Database Search', '/api/note/all', err, true)
        );
        
        if (notes) res.status(400).json(
            { notes }
        )
    });

    //  // Sooo, .populate(arg) is used for arrays that contain primary keys. It will return all the data for each key...
    //      // Simply provide the paramter to query
    //  // .exec() : mongoose queries are executed when we provide a callback or use .then(), but these will not provide a true promise. .exec() will, and we can pass an optional callback to manage that promise.
    //      //  In this case, we could be asking to populate several todos, so it's best to have a true promise so our data is complete
    //      // https://stackoverflow.com/questions/31549857/mongoose-what-does-the-exec-function-do
});

module.exports = noteRouter;
