import { Injectable } from '@nestjs/common';
import { UsersDto } from './dto/users.dto';
import { UsersRepository } from './users.repository';
import { Users } from 'src/entities/users.entity';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  join(createUsersDto: UsersDto): Promise<string> {
    return this.usersRepository.join(createUsersDto);
  }

  login(createUsersDto: UsersDto): Promise<string> {
    return this.usersRepository.login(createUsersDto);
  }

  resetPasswordRequest(createUsersDto: UsersDto): Promise<Users> {
    return this.usersRepository.resetPasswordRequest(createUsersDto);
  }

  resetPassword(createUsersDto: UsersDto): Promise<string> {
    return this.usersRepository.resetPassword(createUsersDto);
  }
}
