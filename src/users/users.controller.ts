import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.model';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/join')
  join(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Users {
    return this.usersService.join(email, password);
  }
}
