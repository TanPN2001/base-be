const db = require("../../services/database");
const user = require("../../entities/user");

exports.cmsCreateUser = async (newUser) => {
  return db.Users.create(newUser);
};

exports.cmsGetUsers = async (params) => {
  let { page, limit, orderMode, orderField, q } = params;
  let conditions = [];
  return db.Users.findAndCountAll({
    where: conditions,
    limit,
    offset: limit * page,
    order: [[orderField, orderMode]],
    include: [{ model: db.Levels }],
  });
};

exports.cmsUpdateUsers = async (userId, newUser) => {
  return db.Users.update(newUser, { where: { userId: userId } });
};

exports.cmsDeleteUser = async (userId) => {
  return db.Users.destroy({ where: { userId: userId } });
};

exports.cmsGetUserWithId = async (userId) => {
  return db.Users.findOne({ where: { userId: userId } });
};
