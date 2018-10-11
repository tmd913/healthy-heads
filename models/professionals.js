module.exports = function (sequelize, DataTypes) {
    var Professional = sequelize.define("Professional", {
        prof_first_name:{
                type: DataTypes.STRING,
                allowNull: false
              },
        prof_last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            len:[1, 20]
          },
        prof_title: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [0, 20]
          },
        prof_specialty1:{
            type: DataTypes.STRING,
            allowNull: true,
            len: [0, 20]
          },
        prof_specialty2: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [0, 20]
          },
        prof_specialty3: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [0, 20]
          },
        prof_phone: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [0, 10]
          },
        prof_email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
          },
        prof_street:{
            type: DataTypes.STRING,
            allowNull: false
          },
        prof_city:{
            type: DataTypes.STRING,
            allowNull: false
          },
        prof_state: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [2,2]
          },
        prof_zip:{
            type: DataTypes.STRING,
            allowNull: false,
            len: [5,5]
          },
        prof_gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prof_years: {
            type: DataTypes.STRING,
            allowNull: false,
            len:[1,2]
          },
        prof_insurance1: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [1,20]
          },
        prof_insurance2: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [1,20]
          },
        prof_insurance3:{
            type: DataTypes.STRING,
            allowNull: true,
            len: [1,20]
          },
        prof_language1: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1,20]
          },
        prof_language2: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [1,20]
          },
        prof_language3: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [1,20]
          },
        prof_photo: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [1,20]
          }    
    });

    return Professional;
};