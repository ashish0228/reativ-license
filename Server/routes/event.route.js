module.exports = (app) => {
    const event = require('../controller/event.controller');
    app.post('/event', event.create);

    // Retrieve Single event
    app.get('/event/:id', event.findOne);

    // Retrieve all Notes
    app.get('/event', event.findAll);

    // Update a Note with noteId
    app.put('/event/:id', event.update);

    // Delete a Note with noteId
    app.delete('/event/:id', event.delete);
}