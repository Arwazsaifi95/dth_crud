import { UserDao } from '../dao/user.dao';
import { UserRole } from '../utils/enum';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserService {
  private userDao: UserDao;

  constructor() {
    this.userDao = new UserDao();
  }

  async createUser(username: string, password: string, role: UserRole) {
    return await this.userDao.createUser(username, password, role);
  }

  async login(username: string, password: string) {
    const user = await this.userDao.findByUsername(username);
    if (!user) throw new Error('User not found');

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error('Invalid password');

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  }
}

export const userService = new UserService();
