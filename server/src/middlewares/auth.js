const jwt = require(jsonwebtoken);

const verifyToken = (req, res, next) => {
  const accessToken = req.headers && req.headers["x-access-token"];
  if (!accessToken) {
    return res
      .status(401)
      .json("You are not allowed to access this resources!");
  }

  jwt.verify(accessToken, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json("Token is invalid!");
      req.user = decoded;
      next();
    }
  });
};

module.exports = { verifyToken };
