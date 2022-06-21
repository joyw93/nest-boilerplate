import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { UserEntity } from './auth.entity';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
