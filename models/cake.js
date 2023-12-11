module.exports = (sequelize, Sequelize) => {
    const cake = sequelize.define("cake", {
        name: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        bigImage: {
            type: Sequelize.STRING
        },
        rate: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.INTEGER
        }
    },
        {
            timestamps: false,
            freezeTableName: true
        })
    return cake
}