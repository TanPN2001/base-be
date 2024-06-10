// const oracledb = require("oracledb");
// if (process.env.NODE_ENV !== "Local") {
//   try {
//     oracledb.initOracleClient({ libDir: "../instantclient" });
//   } catch (err) {
//     console.error(`[FATAL] Can not initialize Oracle libraries`);
//     console.error(err);
//     process.exit(1);
//   }
// }
var path = require("path");
const TAG = "[" + path.basename(__filename) + "]";
const sequelizeConfig = require("../configs/sequelize.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  sequelizeConfig,
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require("../entities/user")(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName]?.associate) {
    db[modelName].associate(db);
  }
});
module.exports = db;
