import { Injectable } from '@nestjs/common';
import { Users } from './users.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  private users: Users;

  join(email: string, password: string) {
    const user: Users = {
      id: 100,
      email,
      password,
      salt: uuid(),
    };

    this.users = user;
    return this.users;
  }
}
