module.exports = (app) => {
    const users = require('../controller/login.controller');

    // Create a new Note
    app.post('/users', users.create);

    // Retrieve a single Note with noteId
    app.post('/users/login', users.login);

}