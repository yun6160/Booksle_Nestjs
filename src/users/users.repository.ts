import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { DataSource, Repository } from 'typeorm';
import { UsersDto } from './dto/users.dto';
import { v1 as uuid } from 'uuid';

@Injectable()
export class UsersRepository extends Repository<Users> {
  constructor(private dataSource: DataSource) {
    super(Users, dataSource.createEntityManager());
  }
  /**
   * 회원 가입
   * @param createUsersDto
   * @returns 가입 인사
   */
  async join(createUsersDto: UsersDto): Promise<string> {
    const { email, password } = createUsersDto;

    const user = this.create({ email, password, salt: uuid() });

    try {
      await this.insert(user);
      return `${email}님, 환영합니다`;
    } catch (error) {
      throw new BadRequestException('회원가입에 실패하였습니다.');
    }
  }

  /**
   * 로그인
   * @param createUsersDto
   * @returns 로그인 완료 문구
   */
  async login(createUsersDto: UsersDto): Promise<string> {
    const { email, password } = createUsersDto;
    const found = await this.findOne({
      where: { email, password },
    });
    if (!found) {
      throw new NotFoundException('이메일 또는 비밀번호가 틀렸습니다');
    }

    return `${email}님이 로그인했습니다`;
  }

  /**
   * 비밀번호 리셋 시, 이메일 확인
   * @param createUsersDto
   * @returns 이메일
   */
  async resetPasswordRequest(createUsersDto: UsersDto): Promise<Users> {
    const { email } = createUsersDto;
    const found = await this.findOne({
      where: { email },
    });
    if (!found) {
      throw new UnauthorizedException();
    }

    return found;
  }

  /**
   * 비밀번호 수정
   * @param createUsersDto
   * @returns 수정 완료 문구
   */
  async resetPassword(createUsersDto: UsersDto): Promise<string> {
    const { email, password } = createUsersDto;
    // update method : 첫번째 인자는 where , 두번째 인자는 변경될 값
    const result = await this.update(
      { email },
      {
        password,
      },
    );

    return result.affected ? `${email}님, 비밀번호가 변경되었습니다` : '';
  }
}
