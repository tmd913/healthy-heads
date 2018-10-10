var bcrypt = require("bcrypt-nodejs");
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;

  // var Prof = sequelize.define( "Prof",
  // {
  //   first_name: {
  //     type: DataTypes.STRING,
  //     allowNull: false
  //   },
  //   last_name: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     len:[1, 20]
  //   },
  //   specialty1: {
  //     type: DataTypes.STRING,
  //     allowNull: true,
  //     len: [0, 20]
  //   },
  //   specialty2: {
  //     type: DataTypes.STRING,
  //     allowNull: true,
  //     len: [0, 20]
  //   },
  //   specialty3: {
  //     type: DataTypes.STRING,
  //     allowNull: true,
  //     len: [0, 20]
  //   },
  //   street_add: {
  //     type: DataTypes.STRING,
  //     allowNull: false
  //   },    
  //   city_add:{
  //     type: DataTypes.STRING,
  //     allowNull: false
  //   },
  //   state_add:{
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     len: [2,2]
  //   },
  //   zip_add:{
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     len: [5,5]
  //   },
  //   gender:{
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     len: [1,1]
  //   },
  //   years:{
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     len:[1,2]
  //   },
  //   insurance1:{
  //     type: DataTypes.STRING,
  //     allowNull: true,
  //     len: [1,20]
  //   },
  //   insurance2:{
  //     type: DataTypes.STRING,
  //     allowNull: true,
  //     len: [1,20]
  //   },
  //   insurance3:{
  //     type: DataTypes.STRING,
  //     allowNull: true,
  //     len: [1,20]
  //   },
  //   language1:{
  //     type: DataTypes.STRING,
  //     allowNull: true,
  //     len: [1,20]
  //   },
  //   language2:{
  //     type: DataTypes.STRING,
  //     allowNull: true,
  //     len: [1,20]
  //   },
  //   language3:{
  //     type: DataTypes.STRING,
  //     allowNull: true,
  //     len: [1,20]
  //   },
  //   prof_email: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     unique: true,
  //     validate: {
  //       isEmail: true
  //     }
  //   }
  // });//end of doctors

};//end of module.exports
