module.exports = (sequelize,DataTypes) => {

    const Worker = sequelize.define('worker',{
        job_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        owner_ID: {
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
        location: {
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
    },{
        timestamps: false
    })

    return Worker
}