const jwt = require("jsonwebtoken");

generateAccessToken = (email) => {
    return jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '604800s' });
}
module.exports = { generateAccessToken };