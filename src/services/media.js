// const FormData = require("form-data");
const { axiosClient } = require("./axios");
var path = require("path");
const TAG = `[${path.basename(__filename)}] `;

module.exports.cmsUploadFile = (fileData, apisecret, headers = {}) => {
  let formData = new FormData();

  for (const [key, value] of Object.entries(fileData)) {
    formData.set(key, value);
  }
  formData.set("type", "IMAGE");
  formData.set("source", "CMS");

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.CMS_URL_SAYMEE}/api/v2/admin/media/upload`,
    headers: {
      ...headers,
      "Content-Type":
        "multipart/form-data; boundary=<calculated when request is sent>",
      apisecret: apisecret,
    },
    data: formData,
    timeout: process.env.HTTP_TIMEOUT,
  };

  axiosClient()
    .request(config)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(TAG, error);
    });
};
