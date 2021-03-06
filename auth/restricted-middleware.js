

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  const token = req.headers.authorization; //send token in header

  if(token){
    const secret = process.env.JWT_SECRET || 'is it secret?';

    jwt.verify(token, secret, (err, decodedToken) => {
      if(err){
        res.status(401).json({ message: "invalid credentials"})
      } else {
        req.decodedJwt = decodedToken;
      }
    })
  } else {
  res.status(400).json({ message: 'No credentials provided' });
  }
};

