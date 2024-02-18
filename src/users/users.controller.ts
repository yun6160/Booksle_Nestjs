import { Body, Controller, HttpCode, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';
import { Users } from 'src/entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/join')
  join(@Body() createUsersDto: UsersDto): Promise<string> {
    return this.usersService.join(createUsersDto);
  }

  @Post('/login')
  @HttpCode(200)
  login(@Body() createUsersDto: UsersDto): Promise<string> {
    return this.usersService.login(createUsersDto);
  }

  @Post('/reset')
  @HttpCode(200)
  resetPasswordRequest(@Body() createUsersDto: UsersDto): Promise<Users> {
    return this.usersService.resetPasswordRequest(createUsersDto);
  }

  @Put('/reset')
  @HttpCode(200)
  resetPassword(@Body() createUsersDto: UsersDto): Promise<string> {
    return this.usersService.resetPassword(createUsersDto);
  }
}
