var path = require('path');
const TAG = '[' + 'midddlewares/' + path.basename(__filename) + ']';
const db = require('../services/database');
const err = require('../configs/error');
const { responseFailed } = require('../utils/utils');
const { rd } = require('../services/redis.js');

async function checkAuthorizationToken(req, res, next) {
  let token = req.headers['apisecret'];
  console.log(TAG, ` - [HTTP] Processing request ${req.path}...`);
  if (token != null) {
    //token = token[0];
    token = token.trim();

    let userId = req.headers['userid'];
    if (userId == null) {
      return res.status(401).json(
        responseFailed(err.ERROR_MISSING_PARAMS.code, {
          message: res.__(err.ERROR_MISSING_PARAMS.description),
        }),
      );
    }
    // TEST BEGIN
    var rdApiSecret = await rd.get(
      `${process.env.REDIS_KEY_PREFIX}:Session:${userId}`,
    );
    if (rdApiSecret == null || rdApiSecret != token) {
      return res.json(
        responseFailed(err.ERROR_INVALID_ACCESS_TOKEN.code, {
          message: res.__(err.ERROR_INVALID_ACCESS_TOKEN.description),
        }),
      );
    }

    // TEST END
    req.userId = userId; // Mark as authorized user
    let user = await db.V1_User.findOne({
      where: {
        id: userId,
      },
      raw: true,
    });
    if (user == null) {
      return res.status(401).json(
        responseFailed(err.ERROR_USER_NOT_FOUND.code, {
          message: res.__(err.ERROR_USER_NOT_FOUND.description),
        }),
      );
    }
    if (user.type != 'SAYMEE') {
      // GAF user => Renew apisecret in cache for 24h more
      await rd.expire(
        `${process.env.REDIS_KEY_PREFIX}:Session:${user.id}`,
        24 * 3600,
      );
    }

    req.user = user;
    next();
  } else {
    var response = {
      result: 'failed',
      reason: err.ERROR_MISSING_TOKEN.description,
      code: err.ERROR_MISSING_TOKEN.code,
      errors: [
        {
          code: err.ERROR_MISSING_TOKEN.code,
          message: err.ERROR_MISSING_TOKEN.description,
        },
      ],
    };

    return res.status(400).json(
      responseFailed(err.ERROR_MISSING_ACCESS_TOKEN.code, {
        message: res.__(err.ERROR_MISSING_ACCESS_TOKEN.description),
      }),
    );
  }

  next();
}

module.exports.checkAuthorizationToken = checkAuthorizationToken;
