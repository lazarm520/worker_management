module.exports = (sequelize,DataTypes) => {

    const Worker = sequelize.define('worker',{
        SCC_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        ambatovy_ID: {
            type: DataTypes.STRING
        },
        firstname: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        position: {
            type: DataTypes.STRING
        },
        new_position: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        },
        working: {
            type: DataTypes.BOOLEAN
        },
        CIN: {
            type: DataTypes.STRING
        },
        birthday: {
            type: DataTypes.DATE
        },
        phone1: {
            type: DataTypes.INTEGER
        },
        phone2: {
            type: DataTypes.INTEGER
        }
    })

    return Worker
}