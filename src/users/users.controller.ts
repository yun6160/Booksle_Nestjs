import {
  Body,
  Controller,
  HttpCode,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.model';
import { UsersDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/join')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  join(@Body() createUsersDto: UsersDto): string {
    return this.usersService.join(createUsersDto);
  }

  @Post('/login')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  login(@Body() createUsersDto: UsersDto): Users {
    return this.usersService.login(createUsersDto);
  }

  @Post('/reset')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  resetPasswordRequest(@Body() createUsersDto: UsersDto): Users {
    return this.usersService.resetPasswordRequest(createUsersDto);
  }

  @Put('/reset')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  resetPassword(@Body() createUsersDto: UsersDto): Users {
    return this.usersService.resetPassword(createUsersDto);
  }
}
