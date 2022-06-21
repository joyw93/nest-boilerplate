import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/auth.create-user.dto';

@Controller('auth')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getAllUsers() {
    return this.authService.getAllUsers;
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) param: number) {
    return 'one user';
  }

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.authService.createUser(createUserDto);
  }
}
