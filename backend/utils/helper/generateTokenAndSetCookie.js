const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, //more secure
    maxAge: 15 * 60 * 60 * 1000, // 15days
    sameSite: "strict",
  });

  return token;
};

module.exports = generateTokenAndSetCookie
