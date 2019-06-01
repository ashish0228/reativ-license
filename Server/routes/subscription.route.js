module.exports = (app) => {
    const subscription = require('../controller/subscription.controller');
    app.post('/subscription', subscription.create);

    // Retrieve a single Note with noteId
    app.post('/subscription/:id', subscription.findOne);

    // Retrieve all Notes
    app.get('/subscription', subscription.findAll);

    // Update a Note with noteId
    app.put('/subscription/:id', subscription.update);

    // Delete a Note with noteId
    app.delete('/subscription/:id', subscription.delete);
}