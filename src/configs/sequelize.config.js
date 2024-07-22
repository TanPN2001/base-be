const sequelizeConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.NODE_ENV == 'Local' ? 'postgres' : 'oracle',
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  timezone: '+07:00',
  schema: process.env.DB_SCHEMA,
  logging: false,
};

module.exports = sequelizeConfig;
