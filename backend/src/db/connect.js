const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Priyanshu:Priyanshu123@cluster0.rx0kg.mongodb.net/travel-trek?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("connection successful");
}).catch(() => {
    console.log("no connection");
});