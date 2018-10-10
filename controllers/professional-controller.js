const db = require("../models");
// const Op = db.Sequelize.Op;

module.exports = function (app) {
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
      prof_photo: "https://randomuser.me/api/portraits/women/55.jpg"
    }).then(function () {
      res.redirect("/api/professionals");
    });
  });

  app.get("/api/professionals", function (req, res) {
    db.Professional.findAll({}).then(function (profData) {
      const hbsObject = {
        professionals: profData
      };
      res.render("index", hbsObject);
    });
  });
};
