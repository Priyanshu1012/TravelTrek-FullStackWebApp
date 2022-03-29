const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    imgSrc: String,
    eventType: String,
    name: String,
    desc: String,
    location: String,
    time: String
});

const Event = new mongoose.model("Event", eventSchema);
module.exports = Event;