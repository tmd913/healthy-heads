var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("passport");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

require("./controllers/professional-controller.js")(app);

// Passport middlewares:
app.use(session({ secret: " pineapple-express",
resave:true, saveUnitialized: true}));

app.use(passport.initialize());

app.use(passport.session());

// require ("./controllers/ptController.js")(app);
require("./controllers/profController.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

   // ("Sarah", "Reynolds", "Psychologist", "Addiction", "Attention Disorders", "Autism", 2025552345, "sarah@sarahreynolds.com", "1101 K St NW", "Washington", "DC", 20005, "Female", 10, "BlueCross", "Cigna", "Aetna", "English", "Spanish", "French", "https://randomuser.me/api/portraits/women/64.jpg"),

    // ("Scout", "Reynolds", "Therapist", "Gender dysphoria", "LGBT", "Depression", 2025553456, "scout@scoutreynolds.com", "1101 K St NW", "Washington", "DC", 20005, "Genderneutral", 10, "BlueCross", "Cigna", "Aetna", "English", "Spanish", "French", "https://randomuser.me/api/portraits/women/4.jpg"),

    // ("Duane", "Moreno", "Social Worker", "Family counselling", "Post-partum depression", " ", 2025554567, "duane@duanemoreno.com", "1600 21st St NW", "Washington", "DC", 20009, "Male", 5, "BlueCross", "Kaiser Permanente", " ", "English", " ", " ", "https://randomuser.me/api/portraits/men/40.jpg"),

    // ("Allison", "Thomas", "Psychiatrist", "Post-traumatic stress disorder", "Social anxiety", "Panic disorder", 2025555678, "allison@allisonthomas.com", "1914 14th St NW", "Washington", "DC", 20009, "Female", 15, "Medicare", "Kaiser Permanente", " ", "English", "Swedish", " ", "https://randomuser.me/api/portraits/women/0.jpg"),

    // ("Miguel", "Reed", "Primary Care Physician", "Separation anxiety", "Acute stress disorder", "Panic disorder", 2025556789, "miguel@miguelreed.com", "151 T St NE", "Washington", "DC", 20002, "Male", 2, "Medicare", "Medicaid", "BlueCross", "English", "Spanish", " ", "https://randomuser.me/api/portraits/men/20.jpg"),

    // ("Nellie", "Henderson", "Clinicians", "Adjustment disorder", "Dissociative identity disorder", "Panic disorder", 2025557890, "nellie@nelliehenderson.com", "385 Water St SE", "Washington", "DC", 20003, "Genderneutral", 10, "Medicare", "Medicaid", "Aetna", "English", " ", " ", "https://randomuser.me/api/portraits/men/12.jpg"),

    // ("Dustin", "Dean", "Social Worker", "Family counselling", " ", " ", 2025559210, "dustin@dustindean.com", "800 Ingraham St NW", "Washington", "DC", 20011, "Male", 10, "BlueCross", "Humana", "Aetna", "English", "Japanese", " ", "https://randomuser.me/api/portraits/men/67.jpg"),

    // ("Theodore", "Webb", "Psychiatrist", "Attention-deficit hyperactivity disorder", "Bipolar disorder", " ", 2025553622, "theodore@theodorewebb.com", "2301 Foxhall Rd NW", "Washington", "DC", 20007, "Male", 30, "BlueCross", "Humana", "United Healthgroup", "English", "Chinese", "Japanese", "https://randomuser.me/api/portraits/men/95.jpg"),

    // ("Caroline", "Stanley", "Psychologist", "Addiction", "Dissociative identity disorder", "Anorexia nervosa", 2025556877, "caroline@carolinestanley.com", "601 F St NW", "Washington", "DC", 20004, "Female", 25, "BlueCross", "Aetna", "United Healthgroup", "English", "Spanish", "French", "https://randomuser.me/api/portraits/women/44.jpg");
