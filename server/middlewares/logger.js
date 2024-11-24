function logger(req, res, next) {
  // if (req.method !== "POST") {
  console.log(`This API call with method ${req.method} on route ${req.url}`);
  next();
  // } else {
  //   res.status(403).send("can't do this");
  // }
}

module.exports = logger;
