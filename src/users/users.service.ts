import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';

@Injectable()
export class UsersService {

  private users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const user: User = {...createUserDto, id: this.users.length + 1 };
    this.users.push(user);
    return {status: 201, message: 'User created successfully', data: user};

  }

  findAll() {
    return {status: 200, message: 'Users retrieved successfully', data: this.users};
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}