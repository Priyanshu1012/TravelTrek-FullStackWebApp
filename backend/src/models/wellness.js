const mongoose = require("mongoose");


const spaarea = mongoose.Schema({
    resort_name:{
        type:String,
        require:true
    },
    resort_type:{
        type:String,
        require:true
    },
    resort_location:{
        type:String,
        require:true
    },
    resort_desc:{
        type:String,
        require:true
    },
    resort_img:{
        type:String,
        require:true
    }
})


const wellnesses = mongoose.model("wellnesses",spaarea);

module.exports = wellnesses;