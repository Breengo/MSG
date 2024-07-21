import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/createUserDto';
import { User } from './user.entity';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @ApiOperation({ summary: 'Creates user' })
  async createUser(@Body() CreateUserDto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(CreateUserDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Deletes user' })
  async deleteUser(@Param('id') id: number): Promise<User> {
    return await this.userService.deleteUser(id);
  }

  @Get('list')
  @ApiOperation({ summary: 'Get user list' })
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }
}
