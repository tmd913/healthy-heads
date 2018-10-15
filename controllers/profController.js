  var db = require("../models");
var passport = require("../config/passport");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = function (app) {
  app.get("/prof/signup", function (req, res) {
    res.render("signup");
  });

  app.get("/", function (req, res) {
    console.log("Going to Login...");
    res.render("login");
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.post("/", passport.authenticate("local"),
    function (req, res) {
      res.json("/prof-finder")
    });

  app.post("/prof/signup",
    function (req, res) {
      console.log("profController req.body:" + req.body);
      db.User.create({
        email: req.body.email,
        password: req.body.password
      }).then(function () {
          res.json("/");
        }).catch(function (err) {
          res.json("/prof/signup");
        });
      })

  app.get("/api/specialties", function (req, res) {
    let specialties = {};
    db.Professional.findAll(
      { 
        attributes: ['prof_specialty1'],
        group: ['prof_specialty1']
      }).then(function (data) {
      data.forEach(element => {
        if (element.dataValues.prof_specialty1) {
          specialties[element.dataValues.prof_specialty1] = null;
        }
      });
      db.Professional.findAll(
        { 
          attributes: ['prof_specialty2'],
          group: ['prof_specialty2']
        }).then(function (data) {
        data.forEach(element => {
          if (element.dataValues.prof_specialty2) {
            specialties[element.dataValues.prof_specialty2] = null;
          }
        });
        db.Professional.findAll(
          { 
            attributes: ['prof_specialty3'],
            group: ['prof_specialty3']
          }).then(function (data) {
          data.forEach(element => {
            if (element.dataValues.prof_specialty3) {
              specialties[element.dataValues.prof_specialty3] = null;
            }
          });
          res.json(specialties);
        });
      });
    });
  });

  app.get("/api/insurances", function (req, res) {
    let insurances = {};
    db.Professional.findAll(
      { 
        attributes: ['prof_insurance1'],
        group: ['prof_insurance1']
      }).then(function (data) {
      data.forEach(element => {
        if (element.dataValues.prof_insurance1) {
          insurances[element.dataValues.prof_insurance1] = null;
        }
      });
      db.Professional.findAll(
        { 
          attributes: ['prof_insurance2'],
          group: ['prof_insurance2']
        }).then(function (data) {
        data.forEach(element => {
          if (element.dataValues.prof_insurance2) {
            insurances[element.dataValues.prof_insurance2] = null;
          }
        });
        db.Professional.findAll(
          { 
            attributes: ['prof_insurance3'],
            group: ['prof_insurance3']
          }).then(function (data) {
          data.forEach(element => {
            if (element.dataValues.prof_insurance3) {
              insurances[element.dataValues.prof_insurance3] = null;
            }
          });
          res.json(insurances);
        });
      });
    });
  });

  app.get("/api/languages", function (req, res) {
    let languages = {};
    db.Professional.findAll(
      { 
        attributes: ['prof_language1'],
        group: ['prof_language1']
      }).then(function (data) {
      data.forEach(element => {
        if (element.dataValues.prof_language1) {
          languages[element.dataValues.prof_language1] = null;
        }
      });
      db.Professional.findAll(
        { 
          attributes: ['prof_language2'],
          group: ['prof_language2']
        }).then(function (data) {
        data.forEach(element => {
          if (element.dataValues.prof_language2) {
            languages[element.dataValues.prof_language2] = null;
          }
        });
        db.Professional.findAll(
          { 
            attributes: ['prof_language3'],
            group: ['prof_language3']
          }).then(function (data) {
          data.forEach(element => {
            if (element.dataValues.prof_language3) {
              languages[element.dataValues.prof_language3] = null;
            }
          });
          res.json(languages);
        });
      });
    });
  });

  app.get("/prof-finder", function (req, res) {
    db.Professional.findAll({}).then(function (profData) {
      const hbsObject = {
        professionals: profData
      };
      res.render("index", hbsObject);
    });
  });

  app.get(`/api/professionals/city=:city?/state=:state?/specialty=:specialty?/insurance=:insurance?/language=:language?/gender=:gender?/years=:years?`,
    function (req, res) {
      console.log(`Req params: ${req.params}`);
      let conditions = { where: {} };
      for (const key in req.params) {
        if (req.params.hasOwnProperty(key)) {
          const element = req.params[key];
          switch (key) {
            case "city":
              if (element)
                conditions.where.prof_city = element;
              break;

            case "state":
              if (element)
                conditions.where.prof_state = element;
              break;

            case "specialty":
              if (element) {
                if (!conditions.where[Op.and]) {
                  conditions.where[Op.and] = [];
                }
                conditions.where[Op.and].push({
                  [Op.or]: {
                    prof_specialty1: element,
                    prof_specialty2: element,
                    prof_specialty3: element
                  }
                });
              }
              break;

            case "insurance":
              if (element) {
                if (!conditions.where[Op.and]) {
                  conditions.where[Op.and] = [];
                }
                conditions.where[Op.and].push({
                  [Op.or]: {
                    prof_insurance1: element,
                    prof_insurance2: element,
                    prof_insurance3: element
                  }
                });
              }
              break;

            case "language":
              if (element) {
                if (!conditions.where[Op.and]) {
                  conditions.where[Op.and] = [];
                }
                conditions.where[Op.and].push({
                  [Op.or]: {
                    prof_language1: element,
                    prof_language2: element,
                    prof_language3: element
                  }
                });
              }
              break;

            case "gender":
              if (element)
                conditions.where.prof_gender = element;
              break;

            case "years":
              if (element) {
                switch (element) {
                  case "Less than 5":
                    conditions.where.prof_years = { [Op.lt]: 5 };
                    break;

                  case "5-15":
                    conditions.where.prof_years = { [Op.between]: [5, 15] };
                    break;

                  case "16-25":
                    conditions.where.prof_years = { [Op.between]: [16, 25] };
                    break;

                  case "More than 25":
                    conditions.where.prof_years = { [Op.gt]: 25 };
                    break;

                  default:
                    break;
                }
              }
              break;

            default:
              break;
          }
        }
      }
      // console.log(conditions);
      db.Professional.findAll(conditions).then(function (profData) {
        // console.log(profData);
        const hbsObject = {
          professionals: profData,
          city: req.params.city,
          state: req.params.state,
          specialty: req.params.specialty,
          insurance: req.params.insurance,
          language: req.params.language,
          gender: req.params.gender,
          years: req.params.years
        };
        console.log(hbsObject);
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
        prof_specialty3: "",
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
        prof_insurance3: "",
        prof_language1: "English",
        prof_language2: "Swedish",
        prof_language3: "",
        prof_photo: "https://randomuser.me/api/portraits/men/7.jpg"
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
        prof_insurance3: "",
        prof_language1: "English",
        prof_language2: "Swedish",
        prof_language3: "",
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
        prof_language3: "",
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
        prof_language2: "",
        prof_language3: "",
        prof_photo: "https://randomuser.me/api/portraits/men/12.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Dustin",
        prof_last_name: "Dean",
        prof_title: "Social Worker",
        prof_specialty1: "Family counselling",
        prof_specialty2: "",
        prof_specialty3: "",
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
        prof_language3: "",
        prof_photo: "https://randomuser.me/api/portraits/men/67.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Theodore",
        prof_last_name: "Webb",
        prof_title: "Psychiatrist",
        prof_specialty1: "Attention-deficit hyperactivity disorder",
        prof_specialty2: "Bipolar disorder",
        prof_specialty3: "",
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
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Earl",
        prof_last_name: "Gray",
        prof_title: "Clinician",
        prof_specialty1: "Panic disorder",
        prof_specialty2: "Autism",
        prof_specialty3: "Attention disorders",
        prof_phone: "7035556746",
        prof_email: "earl@earlgray.com",
        prof_street: "2807 N Glebe Rd",
        prof_city: "Arlington",
        prof_state: "VA",
        prof_zip: 22207,
        prof_gender: "Male",
        prof_years: 15,
        prof_insurance1: "BlueCross",
        prof_insurance2: "Humana",
        prof_insurance3: "Aetna",
        prof_language1: "English",
        prof_language2: "",
        prof_language3: "",
        prof_photo: "https://randomuser.me/api/portraits/men/60.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Nora",
        prof_last_name: "Baker",
        prof_title: "Therapist",
        prof_specialty1: "Social anxiety",
        prof_specialty2: "Separation anxiety disorder",
        prof_specialty3: "",
        prof_phone: "7035555059",
        prof_email: "nora@norabaker.com",
        prof_street: "2900 Clarendon Blvd",
        prof_city: "Arlington",
        prof_state: "VA",
        prof_zip: 22201,
        prof_gender: "Female",
        prof_years: 35,
        prof_insurance1: "BlueCross",
        prof_insurance2: "United Healthgroup",
        prof_insurance3: "",
        prof_language1: "French",
        prof_language2: "English",
        prof_language3: "",
        prof_photo: "https://randomuser.me/api/portraits/women/77.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Kenzi",
        prof_last_name: "Gutierrez",
        prof_title: "Social Worker",
        prof_specialty1: "Depression",
        prof_specialty2: "Bipolar disorder",
        prof_specialty3: "LGBT",
        prof_phone: "3015558628",
        prof_email: "kenzi@kenzigutierrez.com",
        prof_street: "11355 Woodglen Dr",
        prof_city: "Rockville",
        prof_state: "MD",
        prof_zip: 20852,
        prof_gender: "Genderneutral",
        prof_years: 12,
        prof_insurance1: "Medicare",
        prof_insurance2: "Medicaid",
        prof_insurance3: "BlueCross",
        prof_language1: "English",
        prof_language2: "Chinese",
        prof_language3: "Korean",
        prof_photo: "https://randomuser.me/api/portraits/women/78.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Brent",
        prof_last_name: "Butler",
        prof_title: "Psychologist",
        prof_specialty1: "Depression",
        prof_specialty2: "Family counselling",
        prof_specialty3: "Post-partum depression",
        prof_phone: "3015554532",
        prof_email: "brent@brentbutler.com",
        prof_street: "10100 Baltimore Ave",
        prof_city: "College Park",
        prof_state: "MD",
        prof_zip: 20740,
        prof_gender: "Male",
        prof_years: 40,
        prof_insurance1: "Aetna",
        prof_insurance2: "Medicaid",
        prof_insurance3: "Humana",
        prof_language1: "English",
        prof_language2: "German",
        prof_language3: "",
        prof_photo: "https://randomuser.me/api/portraits/men/64.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Josephine",
        prof_last_name: "Neal",
        prof_title: "Social Worker",
        prof_specialty1: "Depression",
        prof_specialty2: "Bipolar disorder",
        prof_specialty3: "Social Anxiety",
        prof_phone: "7035559252",
        prof_email: "josephine@josephineneal.com",
        prof_street: "2700 Clarendon Blvd",
        prof_city: "Arlington",
        prof_state: "VA",
        prof_zip: 22201,
        prof_gender: "Female",
        prof_years: 2,
        prof_insurance1: "BlueCross",
        prof_insurance2: "Medicaid",
        prof_insurance3: "Aetna",
        prof_language1: "English",
        prof_language2: "Swiss",
        prof_language3: "French",
        prof_photo: "https://randomuser.me/api/portraits/women/96.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Mathew",
        prof_last_name: "Rhodes",
        prof_title: "Primary Care Physician",
        prof_specialty1: "Attention disorders",
        prof_specialty2: "Autism",
        prof_specialty3: "Social Anxiety",
        prof_phone: "3015555657",
        prof_email: "mathew@mathewrhodes.com",
        prof_street: "250 Richard Montgomery Drive",
        prof_city: "Rockville",
        prof_state: "MD",
        prof_zip: 20852,
        prof_gender: "Male",
        prof_years: 10,
        prof_insurance1: "Humana",
        prof_insurance2: "Kaiser Permanente",
        prof_insurance3: "",
        prof_language1: "German",
        prof_language2: "English",
        prof_language3: "French",
        prof_photo: "https://randomuser.me/api/portraits/men/52.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Leroy",
        prof_last_name: "Berry",
        prof_title: "Psychiatrist",
        prof_specialty1: "Post-traumatic stress disorder",
        prof_specialty2: "Panic disorder",
        prof_specialty3: "Family counselling",
        prof_phone: "7035553179",
        prof_email: "leroy@leroyberry.com",
        prof_street: "1500 Tysons McLean Dr",
        prof_city: "McLean",
        prof_state: "VA",
        prof_zip: 22102,
        prof_gender: "Male",
        prof_years: 50,
        prof_insurance1: "BlueCross",
        prof_insurance2: "Kaiser Permanente",
        prof_insurance3: "Humana",
        prof_language1: "English",
        prof_language2: "Polish",
        prof_language3: "French",
        prof_photo: "https://randomuser.me/api/portraits/men/13.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Cindy",
        prof_last_name: "Gray",
        prof_title: "Psychologist",
        prof_specialty1: "Depression",
        prof_specialty2: "Social anxiety",
        prof_specialty3: "Family counselling",
        prof_phone: "3015556616",
        prof_email: "cindy@cindygray.com",
        prof_street: "8800 Greenbelt Rd",
        prof_city: "Greenbelt",
        prof_state: "MD",
        prof_zip: 20771,
        prof_gender: "Female",
        prof_years: 35,
        prof_insurance1: "Aetna",
        prof_insurance2: "Humana",
        prof_insurance3: "Medicare",
        prof_language1: "English",
        prof_language2: "German",
        prof_language3: "French",
        prof_photo: "https://randomuser.me/api/portraits/women/41.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Chloe",
        prof_last_name: "Gonzales",
        prof_title: "Social Worker",
        prof_specialty1: "Attention-deficit hyperactivity disorder",
        prof_specialty2: "Social anxiety",
        prof_specialty3: "Family counselling",
        prof_phone: "7035551445",
        prof_email: "chloe@chloegonzales.com",
        prof_street: "4400 University Dr",
        prof_city: "Fairfax",
        prof_state: "VA",
        prof_zip: 22030,
        prof_gender: "Female",
        prof_years: 5,
        prof_insurance1: "Medicaid",
        prof_insurance2: "BlueCross",
        prof_insurance3: "Medicare",
        prof_language1: "English",
        prof_language2: "Spanish",
        prof_language3: "",
        prof_photo: "https://randomuser.me/api/portraits/women/59.jpg"
      });
    }).then(function () {
      db.Professional.create({
        prof_first_name: "Darrell",
        prof_last_name: "Chapman",
        prof_title: "Therapist",
        prof_specialty1: "Post-partum depression",
        prof_specialty2: "Family counselling",
        prof_specialty3: "",
        prof_phone: "3015557181",
        prof_email: "darrell@darrellchapman.com",
        prof_street: "11110 Mall Circle",
        prof_city: "Waldorf",
        prof_state: "MD",
        prof_zip: 20603,
        prof_gender: "Male",
        prof_years: 40,
        prof_insurance1: "Medicaid",
        prof_insurance2: "Aetna",
        prof_insurance3: "Humana",
        prof_language1: "English",
        prof_language2: "French",
        prof_language3: "",
        prof_photo: "https://randomuser.me/api/portraits/men/29.jpg"
      });
      res.redirect("/prof-finder");
    });
  });
}
