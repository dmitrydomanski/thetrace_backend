const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    maidenName: {
        type: String,
        required: false,
    },
    matrimonialStatus: {
        type: String,
        required: false,
    },
    birthDate: {
        type: String,
        required: true,
    },
    deathDate: {
        type: String,
        required: false,
    },
    parentId: {
        type: String,
        required: false,
    },
},
    {
        toObject: {
            transform: (doc, ret) => {
                delete ret._id;
                delete ret.__v;
            }
        }
    });

const Person = mongoose.model('Person', personSchema);
module.exports = Person;