const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/connect");
const Contact = require("./models/contacts");
const cont = Contact.find({});

const Event = require("./models/events");
const eve = Event.find({});

const covidstats = require("./models/covid");
const hashtags = require("./models/hashtags");
const foods = require("./models/foods");
const wellnesses = require("./models/wellness");
const adventurous = require("./models/adventurous");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/contact", (req, res) => {
    res.render("contact")
});

app.get("/adventurous",(req,res)=> {
    adventurous.find({},function(err,adventurethings){
        if(err) console.warn(err);
        res.render("adventurous",{adventurethings:adventurethings});
      })
})

app.get("/food",(req,res)=> {
    foods.find({},function(err,fooditems){
        if(err) console.warn(err);
        res.render("food",{fooditems:fooditems});
      })
})

app.get("/wellness",(req,res)=> {
    wellnesses.find({},function(err,spaarea){
        if(err) console.warn(err);
        res.render("wellness",{spaarea:spaarea});
      })
})

app.get("/events", (req, res) => {
    eve.exec(function(err, data){
        if(err) throw err;
        res.render("events", { data: data});
    });
});

app.get("/covid",(req,res)=> {
    covidstats.find({},function(err,covid){
        if(err) console.warn(err);
        // console.warn(covid[0]);
        res.render("covid",{covid:covid});
      });
});

app.get("/placesToGo",(req,res)=> {
    hashtags.find({},function(err,posts){
        if(err) console.warn(err);
        // console.warn(covid[0]);
        res.render("placesToGo",{posts:posts});
      })
})

app.post("/contact", async(req, res) => {
    try {
        const addCustomer = new Contact({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            country : req.body.country,
            phoneNumber : req.body.phoneNumber,
            message : req.body.message
        })

        const contacted = await addCustomer.save();
        res.status(201).render("contact");
        
    } catch(error){
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
});