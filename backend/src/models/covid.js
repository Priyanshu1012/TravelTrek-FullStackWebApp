const mongoose = require("mongoose");

const covid = mongoose.Schema({
    active_cases:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    new_cases:{
        type:String,
        require:true
    },
    new_deaths:{
        type:String,
        require:true
    },
    total_cases:{
        type:String,
        require:true
    },
    total_deaths:{
        type:String,
        require:true
    }
})


const covidstats = mongoose.model("covidstats",covid);

module.exports = covidstats;