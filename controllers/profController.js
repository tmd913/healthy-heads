var express = require("express");

var router = express.Router();

var db = require("../models");

var passport = require("../config/passport");

module.exports = function (app) {
  app.get("/api/prof/signup", function (req, res) {
    res.render("signup");
  });

  app.get("/api/prof/login", function (req, res) {
    console.log("Going to Login...");
    res.render("login");
  });

  app.post("/api/prof/login", passport.authenticate("local"), 
  function (req, res) {
    res.json("/")
  });

  app.post("/api/prof/signup",
    function (req, res) {
      console.log("profController req.body:" + req.body);
      db.User.create({
        email: req.body.email,
        password: req.body.password
       })
       //.then(function () {
      //   db.Professional.create({
      //     // first_name: req.body.first_name,
      //     // last_name: req.body.last_name,
      //     // specialty1: req.body.specialty1,
      //     // specialty2: req.body.specialty2,
      //     // specialty3: req.body.specialty3,
      //     // street_add: req.body.street_add,
      //     // city_add: req.body.city_add,
      //     // state_add: req.body.state_add,
      //     // zip_add: req.body.zip_add,
      //     // gender: req.body.gender,
      //     // years: req.body.years,
      //     // insurance1: req.body.insurance1,
      //     // insurance2: req.body.insurance2,
      //     // insurance3: req.body.insurance3,
      //     // language1: req.body.language1,
      //     // language2: req.body.language2,
      //     // language3: req.body.language3,
      //     // prof_email: req.body.prof_email,
      //     // prof_phone: req.body.phone
      //     prof_first_name: "John",
      //     prof_last_name: "Smith",
      //     prof_title: "Psychiatrist",
      //     prof_specialty1: "Narcissism",
      //     prof_specialty2: "Mental instability",
      //     prof_specialty3: "Family counselling",
      //     prof_phone: "2025551234",
      //     prof_email: "john@johnsmith.com",
      //     prof_street: "1600 Pennsylvania Ave NW",
      //     prof_city: "Washington",
      //     prof_state: "DC",
      //     prof_zip: 20500,
      //     prof_gender: "Male",
      //     prof_years: 20,
      //     prof_insurance1: "BlueCross",
      //     prof_insurance2: "Cigna",
      //     prof_insurance3: "Aetna",
      //     prof_language1: "English",
      //     prof_language2: "Spanish",
      //     prof_language3: "French",
      //     prof_photo: "https://randomuser.me/api/portraits/women/55.jpg"
        // })
        .then(function () {
          res.redirect( "/api/prof/login");
        })//.catch(function (err) {
        //   console.log(err);
        //   res.json(err);
        // });
      })
    // })

}//end of module.exports

