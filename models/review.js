module.exports = function (sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        reviewerFirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reviewerLastName: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 20]
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        reviewBody: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [0, 200]
        },
        profID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1
        }
    });

    return Review;
};