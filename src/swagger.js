const dotenv = require("dotenv");
dotenv.config();
const swaggerAutogen = require("swagger-autogen")();
const doc = {
  info: {
    title: "Saymee Backend",
    description: "Saymee Backend",
  },
  host: `${process.env.BASE_URL}`,
};

const outputFile = "./swagger.json";
const routes = [
  "./routes/activation.router.js",
  "./routes/app.router.js",
  "./routes/auth.router.js",
  "./routes/subscriber.router.js",
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
