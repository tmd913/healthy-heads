var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Passport middlewares:
app.use(session({ secret: " pineapple-express",
resave:true, saveUnitialized: true}));

app.use(passport.initialize());

app.use(passport.session());

require ("./controllers/ptController")(app);
require ("./controllers/profController")(app);


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
