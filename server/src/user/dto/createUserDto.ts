import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Login', nullable: false })
  @IsNotEmpty()
  login: string;

  @ApiProperty({ description: 'Password', nullable: false })
  @IsNotEmpty()
  password: string;
}
