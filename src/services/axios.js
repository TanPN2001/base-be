var path = require("path");
const TAG = `[${path.basename(__filename)}] `;
const axios = require("axios");
const axiosRetry = require("axios-retry").default;

module.exports.axiosClient = (retry = 0) => {
  axios.default.timeout = 30000;
  axiosRetry(axios, {
    retries: retry,
    retryDelay: (retryCount) => {
      return retryCount * 1000;
    },
    retryCondition: (axios_error) => {
      return true;
    },
    onRetry: (retryCount, error, requestConfig) => {
      console.error(
        TAG,
        `Axios client retry retryCount:${retryCount},error:${error},requestConfig:${requestConfig}`,
      );
      return;
    },
  });
  return axios;
};
