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

  app.get("/api/professionals", function (req, res) {
    db.Professional.findAll({}).then(function (profData) {
      const hbsObject = {
        professionals: profData
      };
      res.render("index", hbsObject);
    });
  });
};
