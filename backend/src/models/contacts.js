const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    country : {
        type: String
    },
    phoneNumber : {
        type: Number,
        required: true
    },
    message : {
        type: String,
        required: true
    }
});

const Contact = new mongoose.model("Contact", customerSchema);
module.exports = Contact;
