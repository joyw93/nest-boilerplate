import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { CreateUserDto } from './dto/auth.create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  getAllUsers() {}

  async createUser(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    await this.authRepository.createUser({
      email,
      password,
    });
  }
}
