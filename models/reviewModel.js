module.exports = (sequelize,DataTypes) => {

    const Reviews = sequelize.define('review',{
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
    })

    return Reviews
}