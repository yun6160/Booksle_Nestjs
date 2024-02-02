import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './users.model';
import { v1 as uuid } from 'uuid';
import { UsersDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  private users: Users[] = [];

  join(createUsersDto: UsersDto): string {
    const { email, password } = createUsersDto;
    const user: Users = {
      email,
      password,
      salt: uuid(),
    };
    this.users.push(user);
    return `${email}님, 환영합니다`;
  }

  login(createUsersDto: UsersDto): Users {
    const { email, password } = createUsersDto;
    const result = this.users.find(
      (v) => v.email === email && v.password === password,
    );

    if (!result) {
      throw new NotFoundException('이메일 또는 비밀번호가 틀렸습니다');
    }

    return result;
  }

  resetPasswordRequest(createUsersDto: UsersDto): Users {
    const { email } = createUsersDto;
    return this.users.find((v) => v.email === email);
  }

  resetPassword(createUsersDto: UsersDto): Users {
    const { email, password } = createUsersDto;
    let user: Users;
    this.users.forEach((v) => {
      if (v.email === email) {
        v.password = password;
        user = v;
      }
    });
    return user;
  }
}
