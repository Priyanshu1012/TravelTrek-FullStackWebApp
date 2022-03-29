const mongoose = require("mongoose");


const posts = mongoose.Schema({
    profile_name:{
        type:String,
        require:true
    },
    profile_img:{
        type:String,
        require:true
    },
    post_img:{
        type:String,
        require:true
    }
})

const hashtags = mongoose.model("hashtags",posts);

module.exports = hashtags;