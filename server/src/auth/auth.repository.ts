import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './auth.entity';
import { CreateUserDto } from './dto/auth.create-user.dto';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    await this.userRepository.save(createUserDto);
  }
}
