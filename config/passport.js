var passport = require("passport");
//Passport Strategy for authenticating with Username and password
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

//using the passport and npm and the a STRATEGY of passport with options of usernameField and passwordField (which are built in options)
//Creating a new "local strategy" to be stored...Allows for route handler to associate the account with the authenticated User
//https://github.com/jaredhanson/passport-local
//http://www.passportjs.org/docs/authorize/
passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function(email, password, done) {
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, dbUser);
    });
  }
));

//First sereializes the user info during the session as an object of req.session.passport.user  {}, which is saved to the session
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

//Matches the true user with the hash for the user during the session to store the session info after the session has ended
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
