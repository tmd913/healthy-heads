.then(function (req, res) {
  console.log("Professional Table Info:" + req.body.prof_title)
  db.Professional.create({
    prof_first_name: req.body.prof_first_name,
    prof_last_name: req.body.prof_last_name,
    prof_title: prof_title,
    prof_specialty1: req.body.prof_specialty1,
    prof_specialty2: req.body.prof_specialty2,
    prof_specialty3: req.body.prof_specialty3,
    prof_phone: req.body.prof_phone,
    prof_email: req.body.prof_email,
    prof_street: req.body.prof_street,
    prof_city: req.body.prof_city,
    prof_state: req.body.prof_state,
    prof_zip: req.body.prof_zip,
    prof_gender: req.body.prof_gender,
    prof_years: req.body.prof_years,
    prof_insurance1: req.body.prof_insurance1,
    prof_insurance2: req.body.prof_insurance2,
    prof_insurance3: req.body.prof_insurance3,
    prof_language1: req.body.prof_language1,
    prof_language2: req.body.prof_language2,
    prof_language3: req.body.prof_language3,
    prof_photo: req.body.prof_photo

  })