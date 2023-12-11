module.exports = (sequelize, Sequelize) => {
    const about = sequelize.define("about", {
        text: {
            type: Sequelize.STRING
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
    return about
}