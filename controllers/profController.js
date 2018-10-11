var db = require("../models");
var passport = require("../config/passport");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

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
      }).then(function () {
        db.Professional.create({
          // first_name: req.body.first_name,
          // last_name: req.body.last_name,
          // specialty1: req.body.specialty1,
          // specialty2: req.body.specialty2,
          // specialty3: req.body.specialty3,
          // street_add: req.body.street_add,
          // city_add: req.body.city_add,
          // state_add: req.body.state_add,
          // zip_add: req.body.zip_add,
          // gender: req.body.gender,
          // years: req.body.years,
          // insurance1: req.body.insurance1,
          // insurance2: req.body.insurance2,
          // insurance3: req.body.insurance3,
          // language1: req.body.language1,
          // language2: req.body.language2,
          // language3: req.body.language3,
          // prof_email: req.body.prof_email,
          // prof_phone: req.body.phone
        }).then(function () {
          res.redirect(307, "/api/prof/login");
        }).catch(function (err) {
          console.log(err);
          res.json(err);
        });
      })
    });

  app.get("/api/professionals", function (req, res) {
    db.Professional.findAll({}).then(function (profData) {
      const hbsObject = {
        professionals: profData
      };
      res.render("index", hbsObject);
    });
  });

  app.get("/api/professionals/&city=:city?/&state=:state?/&specialty=:specialty?/&insurance=:insurance?/&gender=:gender?/&years=:years?", function (req, res) {
    console.log(`Req params: ${req.params}`);
    let conditions = { where: {} };
    for (const key in req.params) {
      if (req.params.hasOwnProperty(key)) {
        const element = req.params[key];
        switch (key) {
          case "city":
            if (element)
              conditions.where.city = element;
            break;

          case "state":
            if (element)
              conditions.where.state = element;
            break;

          case "specialty":
            if (element)
              conditions.where.prof_specialty1 = element;
            break;

          case "insurance":
            if (element)
              conditions.where.prof_insurance1 = element;
            break;

          case "language":
            if (element)
              conditions.where.prof_language1 = element;
            break;

          case "gender":
            if (element)
              conditions.where.prof_gender = element;
            break;

          case "years":
            if (element)
              conditions.where.prof_years = element;
            break;

          default:
            break;
        }
      }
    }
    console.log(conditions);
    db.Professional.findAll(conditions).then(function (profData) {
      const hbsObject = {
        professionals: profData
      };
      res.render("index", hbsObject);
    });
  });

  app.get("/api/create-seeds", function (req, res) {
    db.Professional.create({
      prof_first_name: "John",
      prof_last_name: "Smith",
      prof_title: "Psychiatrist",
      prof_specialty1: "Narcissism",
      prof_specialty2: "Mental instability",
      prof_specialty3: "Family counselling",
      prof_phone: "2025551234",
      prof_email: "john@johnsmith.com",
      prof_street: "1600 Pennsylvania Ave NW",
      prof_city: "Washington",
      prof_state: "DC",
      prof_zip: 20500,
      prof_gender: "Male",
      prof_years: 20,
      prof_insurance1: "BlueCross",
      prof_insurance2: "Cigna",
      prof_insurance3: "Aetna",
      prof_language1: "English",
      prof_language2: "Spanish",
      prof_language3: "French",
      prof_photo: "https://randomuser.me/api/portraits/men/32.jpg"
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Sarah",
        prof_last_name: "Reynolds",
        prof_title: "Psychologist",
        prof_specialty1: "Addiction",
        prof_specialty2: "Attention Disorders",
        prof_specialty3: "Autism",
        prof_phone: "2025552345",
        prof_email: "sarah@sarahreynolds.com",
        prof_street: "1101 K St NW",
        prof_city: "Washington",
        prof_state: "DC",
        prof_zip: 20005,
        prof_gender: "Female",
        prof_years: 10,
        prof_insurance1: "BlueCross",
        prof_insurance2: "Cigna",
        prof_insurance3: "Aetna",
        prof_language1: "English",
        prof_language2: "Spanish",
        prof_language3: "French",
        prof_photo: "https://randomuser.me/api/portraits/women/64.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Duane",
        prof_last_name: "Moreno",
        prof_title: "Social Worker",
        prof_specialty1: "Family counselling",
        prof_specialty2: "Post-partum depression",
        prof_specialty3: " ",
        prof_phone: "2025554567",
        prof_email: "duane@duanemoreno.com",
        prof_street: "1600 21st St NW",
        prof_city: "Washington",
        prof_state: "DC",
        prof_zip: 20009,
        prof_gender: "Male",
        prof_years: 5,
        prof_insurance1: "BlueCross",
        prof_insurance2: "Kaiser Permanente",
        prof_insurance3: " ",
        prof_language1: "English",
        prof_language2: "Swedish",
        prof_language3: " ",
        prof_photo: "https://randomuser.me/api/portraits/men/20.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Scout",
        prof_last_name: "Reynolds",
        prof_title: "Therapist",
        prof_specialty1: "Gender dysphoria",
        prof_specialty2: "LGBT",
        prof_specialty3: "Depression",
        prof_phone: "2025553456",
        prof_email: "scout@scoutreynolds.com",
        prof_street: "1101 K St NW",
        prof_city: "Washington",
        prof_state: "DC",
        prof_zip: 20005,
        prof_gender: "Genderneutral",
        prof_years: 10,
        prof_insurance1: "BlueCross",
        prof_insurance2: "Cigna",
        prof_insurance3: "Aetna",
        prof_language1: "English",
        prof_language2: "Spanish",
        prof_language3: "French",
        prof_photo: "https://randomuser.me/api/portraits/women/4.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Allison",
        prof_last_name: "Thomas",
        prof_title: "Psychiatrist",
        prof_specialty1: "Post-traumatic stress disorder",
        prof_specialty2: "Social anxiety",
        prof_specialty3: "Panic disorder",
        prof_phone: "2025555678",
        prof_email: "allison@allisonthomas.com",
        prof_street: "1914 14th St NW",
        prof_city: "Washington",
        prof_state: "DC",
        prof_zip: 20009,
        prof_gender: "Female",
        prof_years: 15,
        prof_insurance1: "Medicare",
        prof_insurance2: "Kaiser Permanente",
        prof_insurance3: " ",
        prof_language1: "English",
        prof_language2: "Swedish",
        prof_language3: " ",
        prof_photo: "https://randomuser.me/api/portraits/women/0.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Miguel",
        prof_last_name: "Reed",
        prof_title: "Primary Care Physician",
        prof_specialty1: "Separation anxiety",
        prof_specialty2: "Acute stress disorder",
        prof_specialty3: "Panic disorder",
        prof_phone: "2025556789",
        prof_email: "miguel@miguelreed.com",
        prof_street: "151 T St NE",
        prof_city: "Washington",
        prof_state: "DC",
        prof_zip: 20002,
        prof_gender: "Male",
        prof_years: 2,
        prof_insurance1: "Medicare",
        prof_insurance2: "Medicaid",
        prof_insurance3: "BlueCross",
        prof_language1: "English",
        prof_language2: "Swedish",
        prof_language3: " ",
        prof_photo: "https://randomuser.me/api/portraits/men/20.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Nellie",
        prof_last_name: "Henderson",
        prof_title: "Clinician",
        prof_specialty1: "Adjustment disorder",
        prof_specialty2: "Dissociative identity disorder",
        prof_specialty3: "Panic disorder",
        prof_phone: "2025557890",
        prof_email: "nellie@nelliehenderson.com",
        prof_street: "385 Water St SE",
        prof_city: "Washington",
        prof_state: "DC",
        prof_zip: 20003,
        prof_gender: "Genderneutral",
        prof_years: 10,
        prof_insurance1: "Medicare",
        prof_insurance2: "Medicaid",
        prof_insurance3: "Aetna",
        prof_language1: "English",
        prof_language2: " ",
        prof_language3: " ",
        prof_photo: "https://randomuser.me/api/portraits/men/12.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Dustin",
        prof_last_name: "Dean",
        prof_title: "Social Worker",
        prof_specialty1: "Family counselling",
        prof_specialty2: " ",
        prof_specialty3: " ",
        prof_phone: "2025559210",
        prof_email: "dustin@dustindean.com",
        prof_street: "800 Ingraham St NW",
        prof_city: "Washington",
        prof_state: "DC",
        prof_zip: 20011,
        prof_gender: "Male",
        prof_years: 10,
        prof_insurance1: "BlueCross",
        prof_insurance2: "Humana",
        prof_insurance3: "Aetna",
        prof_language1: "English",
        prof_language2: "Japanese",
        prof_language3: " ",
        prof_photo: "https://randomuser.me/api/portraits/men/67.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Theodore",
        prof_last_name: "Webb",
        prof_title: "Psychiatrist",
        prof_specialty1: "Attention-deficit hyperactivity disorder",
        prof_specialty2: "Bipolar disorder",
        prof_specialty3: " ",
        prof_phone: "2025553622",
        prof_email: "theodore@theodorewebb.com",
        prof_street: "2301 Foxhall Rd NW",
        prof_city: "Washington",
        prof_state: "DC",
        prof_zip: 20007,
        prof_gender: "Male",
        prof_years: 30,
        prof_insurance1: "BlueCross",
        prof_insurance2: "Humana",
        prof_insurance3: "United Healthgroup",
        prof_language1: "English",
        prof_language2: "Chinese",
        prof_language3: "Japanese",
        prof_photo: "https://randomuser.me/api/portraits/men/95.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Caroline",
        prof_last_name: "Stanley",
        prof_title: "Psychologist",
        prof_specialty1: "Addiction",
        prof_specialty2: "Dissociative identity disorder",
        prof_specialty3: "Anorexia nervosa",
        prof_phone: "2025556877",
        prof_email: "caroline@carolinestanley.com",
        prof_street: "601 F St NW",
        prof_city: "Washington",
        prof_state: "DC",
        prof_zip: 20004,
        prof_gender: "Female",
        prof_years: 25,
        prof_insurance1: "BlueCross",
        prof_insurance2: "Humana",
        prof_insurance3: "United Healthgroup",
        prof_language1: "English",
        prof_language2: "Spanish",
        prof_language3: "French",
        prof_photo: "https://randomuser.me/api/portraits/women/44.jpg"
      });
      res.redirect("/api/professionals");
    });
  });
}

