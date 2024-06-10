var createError = require("http-errors");
var express = require("express");
var path = require("path");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var loggerMorgan = require("morgan");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
require("body-parser-xml")(bodyParser);

const userRouter = require("./routes/user.route");

global.__basedir = __dirname;
const { logger } = require("./services/logger");
var app = express();
var useragent = require("express-useragent");
const i18n = require("i18n");
require("./i18n/i18n.config");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const deleteEmptyBodyMiddleware = require("./middlewares/delete-empty-body.middleware");

app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(loggerMorgan("dev"));

app.use(cookieParser());
app.use(
  bodyParser.json({
    limit: "128mb",
  }),
);
app.use(bodyParser.xml());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "128mb",
    parameterLimit: 128000,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(useragent.express());
app.use(
  fileUpload({
    createParentPath: true,
    parseNested: true,
  }),
);
app.use(i18n.init);

// middleware
app.use(deleteEmptyBodyMiddleware);

//route
app.use(`${process.env.ROUTE_PATH ?? "/api/v1"}`, userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.error(req.originalUrl);
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).send("");
  // res.render("error");
});

module.exports = app;
