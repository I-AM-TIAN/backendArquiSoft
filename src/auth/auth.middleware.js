const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    return res.status(401).json({ message: 'Acceso denegado. No se proporcionó un token.' });
  }

  const token = authHeader.split(' ')[1]; // Extrae solo el token sin 'Bearer'

  if (!token) {
    return res.status(401).json({ message: 'Token malformado.' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token inválido.' });
  }
};
