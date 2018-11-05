const API_PORT = 3001;
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const router = express.Router();

// mongoose & connection to db
const config = require('./config/database');
mongoose.connect(config.database, { useNewUrlParser: true });
let db = mongoose.connection;
db.once('open', () => console.log('connected to MongoDB'));
db.on('error', (err) => console.log(err));

const Person = require('./models/person');

const persons = require('./routes/persons')
app.use('/api', persons);

// const personsService = require('./services/person-service');
// const data = require('./data');
// const personsArray = personsService.sortByBirthDate(data.data);
// console.log(personsService.createDataTree(personsArray));

app.listen(API_PORT, () => console.log(`server is up and listening on port ${API_PORT}`));