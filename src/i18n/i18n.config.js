const i18n = require("i18n");
const path = require("path");
i18n.configure({
  locales: ["en", "vi"],
  defaultLocale: "vi",
  directory: path.join(__dirname, "/locales"),
});
