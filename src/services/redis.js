const Redis = require("ioredis");

const rd = new Redis({
  sentinels: [
    {
      host: process.env.REDIS_SENTINEL_HOST,
      port: process.env.REDIS_SENTINEL_PORT,
      password: process.env.REDIS_SENTINEL_PASSWORD,
      db: process.env.REDIS_DB
    },
  ],
  name: "saymee-redis",
  password: process.env.REDIS_PASSWORD,
  db:process.env.REDIS_DB
});
console.log(
  "REDIS",
  `Initializing connection to redis sentinel server ${process.env.REDIS_SENTINEL_HOST}:${process.env.REDIS_SENTINEL_PORT}`
);
rd.on("connect", () => {
  console.log(
    "REDIS",
    `Connected to redis sentinel server ${process.env.REDIS_SENTINEL_HOST}:${process.env.REDIS_SENTINEL_PORT}`
  );
});
rd.on("error", (err) => {
  console.log("REDIS", `Failed to connect to redis sentinel server.${err}`);
});

module.exports.rd = rd;
