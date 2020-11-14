import jwt from 'jsonwebtoken';

export default (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ message: 'Login requiredd' });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;
    request.userId = id;
    request.userEmail = email;
    return next();
  } catch (e) {
    return response.status(401).json({ message: 'Token Expirado ou invalido' });
  }
};
