module.exports = (sequelize, Sequelize) => {
    const order = sequelize.define("user_order", {
        cakeId: {
            type: Sequelize.INTEGER,
            references: {
                model: "cake",
                key: "id",
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        }
    },
        {
            timestamps: false,
            freezeTableName: true
        })
    return order
}