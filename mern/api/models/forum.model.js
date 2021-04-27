const mongoose = require("mongoose");

const forum = mongoose.model(
    "forum",
    new mongoose.Schema({
        country: String,
        author: String,
        author_id: String,
        content: String,
        date: Date,
    })
);

module.exports = forum;
