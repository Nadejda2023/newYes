import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create_user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private  userRepository: Repository<User>,
  ) {}

  async createUser(dtor: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(dtor)
    return await this.userRepository.save(user);
  }

  async getAllUsers(): Promise<User[]> {

    const users = await this.userRepository.find()
    return users;
    
  }
}