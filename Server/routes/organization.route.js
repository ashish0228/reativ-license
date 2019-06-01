module.exports = (app) => {
    const organzation = require('../controller/organization.controller');
    app.post('/organzation', organzation.create);

    // Retrieve a single Note with noteId
    app.post('/organzation/:id', organzation.findOne());

    // Retrieve all Notes
    app.get('/organzation', organzation.findAll);

    // Update a Note with noteId
    app.put('/organzation/:id', organzation.update);

    // Delete a Note with noteId
    app.delete('/organzation/:id', organzation.delete);
}