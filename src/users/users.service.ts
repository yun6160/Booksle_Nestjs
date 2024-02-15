import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { UsersDto } from './dto/users.dto';
import { UsersRepository } from './users.repository';
import { Users } from 'src/entities/users.entity';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async join(createUsersDto: UsersDto): Promise<string> {
    const { email, password } = createUsersDto;

    const user = this.usersRepository.create({ email, password, salt: uuid() });

    try {
      await this.usersRepository.insert(user);
      return '가입이 완료되었습니다';
    } catch (error) {
      throw new BadRequestException('회원가입에 실패하였습니다.');
    }
  }

  async login(createUsersDto: UsersDto): Promise<string> {
    const { email, password } = createUsersDto;
    const found = await this.usersRepository.findOne({
      where: { email, password },
    });
    if (!found) {
      throw new NotFoundException('이메일 또는 비밀번호가 틀렸습니다');
    }

    return `${email}님이 로그인했습니다`;
  }

  // resetPasswordRequest(createUsersDto: UsersDto): Users {
  //   const { email } = createUsersDto;
  //   return this.users.find((v) => v.email === email);
  // }

  // resetPassword(createUsersDto: UsersDto): Users {
  //   const { email, password } = createUsersDto;
  //   let user: Users;
  //   this.users.forEach((v) => {
  //     if (v.email === email) {
  //       v.password = password;
  //       user = v;
  //     }
  //   });
  //   return user;
  // }
}
