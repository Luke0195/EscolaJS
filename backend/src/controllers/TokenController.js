import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(request, response) {
    try {
      const { email = '', password = '' } = request.body;

      if (!email || !password) {
        return response.status(401).json({ message: 'Credencials invalidas!' });
      }

      const user = await User.findOne({ where: { email } });
      if (!user) {
        return response.status(401).json({ message: ' Usuário não existe' });
      }

      if (!(await user.passwordIsValid(password))) {
        return response.status(401).json({ message: 'Senha Invalida!' });
      }

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      return response.json({ token });
    } catch (e) {
      return response.json(e);
    }
  }
}
export default new TokenController();
