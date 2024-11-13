import  AppDataSource  from '../config/dataSource';
import bcrypt from 'bcrypt';
import { User } from '../entities/user.entity';
import { UserRole } from '../utils/enum';

export class UserDao {
  private userRepository = AppDataSource.getRepository(User);

  async createUser(username: string, password: string, role: UserRole): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.userRepository.create({
      username: username,
      password: hashedPassword,
      role: role as UserRole,
    });

    return await this.userRepository.save(user);
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return await this.userRepository.findOneBy({ username });
  }
}
