module.exports = (app) => {
    const users = require('../controller/user.controller');

    // Create a new user
    app.post('/users', users.create);

    // Retrieve a single user with email
    app.post('/users/login', users.login);

    // Retrieve all Notes
    app.get('/users', users.findAll);

    // Update a user with userwith
    app.put('/users/:userId', users.update);

    // Delete a user with user with id
    app.delete('/users/:userId', users.delete);
}