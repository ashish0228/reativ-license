const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./Server/passport');
const auth = require('./Server/routes/auth');
const user = require('./Server/routes/auth');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use('/auth', auth);
app.use('/user', passport.authenticate('jwt', {session: false}), user);

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const dbConfig = require('./Server/config/database.config');

mongoose.Promise = global.Promise;
require('./Server/routes/user')(app);

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Welcome to application."});
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
