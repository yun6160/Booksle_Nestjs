import { IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class UsersDto {
  id: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsOptional()
  password: string;
  salt: string;
}
