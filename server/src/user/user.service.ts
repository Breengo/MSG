import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersRepository.create(createUserDto);
    await this.usersRepository.save(user);

    return user;
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    this.usersRepository.delete(user);

    return user;
  }

  updateUser(): string {
    return 'Update user';
  }

  async getAllUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }
}
