module.exports = (sequelize, Sequelize) => {
    const description = sequelize.define("description", {
        text: {
            type: Sequelize.STRING(1200)
        },
        cakeId: {
            type: Sequelize.INTEGER,
            references: {
                model: "cake",
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
    return description
}