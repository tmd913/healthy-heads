var express = require("express");

var router = express.Router();

var db = require("../models");

var passport = require ("../config/passport");

module.exports = function (app){
  app.post ("/api/prof/login", passport.authenticate("local"), function(req, res){
    res.json("/")
  });

  app.post("/api/prof/signup",
  function(req, res){
    console.log(req.body);
    db.User.create ({
      email: req.body.email,
      password: req.body.password
    }).then(function(){
      db.Prof.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        specialty1: req.body.specialty1,
        specialty2: req.body.specialty2,
        specialty3: req.body.specialty3,
        street_add: req.body.street_add,
        city_add: req.body.city_add,
        state_add: req.body.state_add,
        zip_add: req.body.zip_add,
        gender: req.body.gender,
        years: req.body.years,
        insurance1: req.body.insurance1,
        insurance2: req.body.insurance2,
        insurance3: req.body.insurance3,
        language1: req.body.language1,
        language2: req.body.language2,
        language3: req.body.language3,
        prof_email: req.body.prof_email,
        prof_phone: req.body.phone
      });
    }).then(function(){
      res.redirect(307, "api/prof/login");
    }).catch(function(err){
      console.log(err);
      res.json(err);
    });
  })

}//end of module.exports

