import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create_user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}


  async createUser(dto: CreateUserDto): Promise<CreateUserDto> {
        const user = await this.UserRepository.create(dto);
        return this.UserRepository.save(user);
  }

  async getUsersByLogin(login: string) {
    const user = await this.UserRepository.findOne({where: {login}})
    return user;

  }

  
  
}


