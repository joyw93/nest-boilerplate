import {
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

@Controller('auth')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getAllUsers() {
    throw new HttpException('api is broken', 401);
    return 'all User';
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) param: number) {
    return 'one user';
  }

  @Post()
  createUser() {
    return 'create user';
  }
}
