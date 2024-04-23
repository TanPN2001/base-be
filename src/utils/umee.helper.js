const moment = require("moment");

/**
 *
 * @param {Date} wakeAt
 * @param {Date} requireSleepAt
 * @returns true: có thể đi ngủ, false: chưa thể đi ngủ
 */
exports.checkSleepUmee = (wakeAt, requireSleepAt) => {
  let now = moment().toString();

  // chưa ngủ dậy
  if (moment(wakeAt).isAfter(moment(now))) {
    return false;
  } else {
    // đã ngủ dậy
    // -    chưa đến giờ đi ngủ
    if (moment(requireSleepAt).isAfter(now)) {
      return false;
    }
    // -    đã đến giờ đi ngủ
    else {
      return true;
    }
  }
};

/**
 *
 * @param {Date} requireFeedAt
 * @returns true: có thể cho ăn, false: chưa thể co ăn
 */
exports.checkFeedUmee = (requireFeedAt) => {
  let now = moment().toString();
  if (moment(requireFeedAt).isAfter(now)) {
    return false;
  } else {
    return true;
  }
};
