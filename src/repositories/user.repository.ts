import {
  EntityRepository,
  getConnection,
  QueryRunner,
  Repository
} from 'typeorm';
import {User} from '../entities/user.entity';
import {comparePassword, hashPassword} from '../utils/bcrypt';
import {getCurrentSystemDatetime} from '../utils/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  /**
   * Verify Credentials
   */
  async verifyCredentials(name: string, password: string) {
    const foundUser = await this.findOne({name, deleted: 0});

    if (!foundUser) {
      return null;
    }

    // validate password
    const passwordMatched = await comparePassword(
      password,
      foundUser!.password
    );

    if (!passwordMatched) {
      return null;
    }

    // update last_login
    foundUser.lastLogin = getCurrentSystemDatetime();
    foundUser.updatedBy = foundUser.name;

    await this.update(foundUser.id, foundUser);

    return foundUser;
  }

  /**
   * Get all Users
   */
  async getAll() {
    const foundUsers = await this.find({});
    return foundUsers;
  }

  /**
   * Add a User
   */
  async add(userData: any, currentUser: any) {
    const queryRunner: QueryRunner = getConnection().createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const user = new User();
      user.name = userData.username;
      user.password = await hashPassword(userData.password);
      user.role = userData.role;
      user.deleted = 0;
      user.createdAt = getCurrentSystemDatetime();
      user.createdBy = currentUser.name;

      await this.save(user);
      await queryRunner.commitTransaction();
      return true;
    } catch (err) {
      console.log(err.code);
      console.log(err.sqlMessage);

      await queryRunner.rollbackTransaction();
      return false;
    } finally {
      await queryRunner.release();
    }
  }
}
