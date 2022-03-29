const mongoose = require("mongoose");


const fooditems = mongoose.Schema({
    food_name:{
        type:String,
        require:true
    },
    food_type:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    food_description:{
        type:String,
        require:true
    },
    food_img:{
        type:String,
        require:true
    }
})

const foods = mongoose.model("foods",fooditems);

module.exports = foods;