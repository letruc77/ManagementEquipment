const jwt = require("jsonwebtoken");
const uuidValidate = require("uuid");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  })
}

const checkId = (req, res, next) => {
  if (isNullOrUndefined(req.id) || !uuidValidate(req.id)) {
    console.log('Id is not the correct format!');
    return;
  }
  next();
}

module.export =  { authenticateToken, checkId } ;