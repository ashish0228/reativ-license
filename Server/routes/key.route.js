module.exports = (app) => {
    const key = require('../controller/key.controller');
    app.post('/key', key.create);

    // Retrieve a single Note with noteId
    app.post('/key/:id', key.findOne);

    // Retrieve all Notes
    app.get('/key', key.findAll);

    // Update a Note with noteId
    app.put('/key/:id', key.update);

    // Delete a Note with noteId
    app.delete('/key/:id', key.delete);
}