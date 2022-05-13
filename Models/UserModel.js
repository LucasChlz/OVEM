const { mongo } = require('../database');
const mongoose = require('../database');

const UserSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    filePicture: {
        type: String,
        required: false
    },
    fileBanner: {
        type: String,
        required: false
    },
    bio: {
        type: String,
        required: false
    },
    friends: {
        type: Number,
        required: false
    }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;