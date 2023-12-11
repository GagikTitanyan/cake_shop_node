const { Sequelize } = require("sequelize");
const { HOST, USER, PASSWORD, DIALECT, DB } = require("../config");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

const cake = require('./cake')(sequelize, Sequelize)
const description = require('./description')(sequelize, Sequelize)
const about = require('./about')(sequelize, Sequelize)
const user = require('./user')(sequelize, Sequelize)
const orders = require('./user_order')(sequelize, Sequelize)

cake.hasMany(description, { foreignKey: 'cakeId' })
cake.hasMany(about, { foreignKey: 'cakeId' })

user.hasMany(orders, { foreignKey: 'userId' })
orders.hasMany(cake, { foreignKey: 'cakeId' })

sequelize.sync({});

module.exports = {
  cake,
  description,
  about,
  user,
  orders
};
