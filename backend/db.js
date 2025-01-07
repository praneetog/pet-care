require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.MONGO_URL;

mongoose.connect(url)

const userSchema = new mongoose.Schema({
    fullName: String,
    phone: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = { User };