module.exports = (app) => {
    const organzationTree = require('../controller/organizationTree.controller');
    app.post('/organzationTree', organzationTree.create);

    // Retrieve a single Note with noteId
    app.post('/organzationTree/:id', organzationTree.findOne);

    // Retrieve all Notes
    app.get('/organzationTree', organzationTree.findAll);

    // Update a Note with noteId
    app.put('/organzationTree/:id', organzationTree.update);

    // Delete a Note with noteId
    app.delete('/organzationTree/:id', organzationTree.delete);
}