const moment = require("moment");

exports.responseSuccess = (data = null) => {
  return {
    status: 0,
    data: data,
  };
};
exports.responseFailed = (status, errors = {}) => {
  return {
    status: status,
    errors: errors,
  };
};

exports.validPhone = (phone) => {
  return phone?.match(/\d/g)?.length === 10;
};
exports.validOTP = (otp) => {
  return otp?.match(/\d/g)?.length === 6;
};

/**
 *
 * @param {any} date
 * @returns
 */
exports.isValidDate = (date) => {
  return (
    moment(date).isValid() &&
    moment(date).isAfter("1900-01-01") &&
    moment(date).isBefore("2100-01-01")
  );
};

/**
 *
 * @param {any} stringify
 * @returns {Boolean}
 */
exports.isValidStringify = (stringify) => {
  try {
    JSON.parse(stringify);
  } catch (error) {
    return false;
  }
  return true;
};
