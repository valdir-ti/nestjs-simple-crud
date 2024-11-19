import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsDateString()
  dateOfBirth: string;

  @IsString()
  role: string = 'user';

  @IsDateString()
  createdAt: string = new Date().toISOString();

  @IsDateString()
  @IsOptional()
  updatedAt: string = null;

  @IsDateString()
  @IsOptional()
  deletedAt: string = null;

  @IsBoolean()
  active: boolean = true;
}
