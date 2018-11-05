const express = require('express');
const router = express.Router();
const personsService = require('../services/person-service');
const Person = require('../models/person');

//get all persons from the db
router.get('/getpersons', (req, res) => {
    Person.find((err, persons) => {
        if (err) return res.json({ success: false, error: err });
        const dataArray = persons.map(person => {
            return person.toObject({ transform: true });
        });
        const treeData = personsService.createDataTree(personsService.sortByBirthDate(dataArray));
        return res.json({ success: true, data: treeData });
    });
});

//create a person
router.post('/add', (req, res) => {
    let person = new Person(req.body);
    person.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

module.exports = router;