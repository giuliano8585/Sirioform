const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decoded);  // Aggiungi questo per verificare il token decodificato
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('Token error:', err.message);  // Aggiungi questo per verificare eventuali errori
    res.status(401).json({ message: 'Token is not valid' });
  }
};


