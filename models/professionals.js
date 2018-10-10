module.exports = function (sequelize, DataTypes) {
    var Professional = sequelize.define("Professional", {
        prof_first_name: DataTypes.STRING,
        prof_last_name: DataTypes.STRING,
        prof_title: DataTypes.STRING,
        prof_specialty1: DataTypes.STRING,
        prof_specialty2: DataTypes.STRING,
        prof_specialty3: DataTypes.STRING,
        prof_phone: DataTypes.STRING,
        prof_email: DataTypes.STRING,
        prof_street: DataTypes.STRING,
        prof_city: DataTypes.STRING,
        prof_state: DataTypes.STRING,
        prof_zip: DataTypes.STRING,
        prof_gender: DataTypes.STRING,
        prof_years: DataTypes.INTEGER,
        prof_insurance1: DataTypes.STRING,
        prof_insurance2: DataTypes.STRING,
        prof_insurance3: DataTypes.STRING,
        prof_language1: DataTypes.STRING,
        prof_language2: DataTypes.STRING,
        prof_language3: DataTypes.STRING,
        prof_photo: DataTypes.STRING    
    });

    return Professional;
};