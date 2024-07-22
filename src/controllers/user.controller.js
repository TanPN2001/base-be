var path = require('path');
const TAG = `[${path.basename(__filename)}] `;
const db = require('../services/database');
const Op = db.Sequelize.Op;
const err = require('../configs/error');
const { logger } = require('../services/logger');
const i18n = require('i18n');
const utils = require('../utils/utils');
const {
  PAGE_PAGINATION,
  LIMIT_PAGINATION,
} = require('../configs/constants/others.constant');

module.exports.test = async (req, res) => {
  try {
    console.log('123');
    return res.json({ message: 'Users Module ready!!!' });
  } catch (error) {
    console.error(TAG, error);
    return res.json(
      utils.responseFailed(err.ERROR_SERVER_INTERNAL.code, {
        message:
          error?.message ?? res.__(err.ERROR_SERVER_INTERNAL.description),
      }),
    );
  }
};
