import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private nextId = 1;

  // Create a user
  create(createUserDto: CreateUserDto) {
    const user: User = {
      ...createUserDto,
      id: this.nextId++,
    };

    this.users.push(user);

    return {
      status: 201,
      message: 'User created successfully',
      data: user,
    };
  }

  // Retrieve all users
  findAll() {
    return {
      status: 200,
      message: 'Users retrieved successfully',
      data: this.users,
    };
  }

  // Retrieve a user by ID
  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      status: 200,
      message: 'User retrieved successfully',
      data: user,
    };
  }

  // Update a user
  updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    Object.assign(user, updateUserDto);

    return {
      status: 200,
      message: 'User updated successfully',
      data: user,
    };
  }

  // Delete a user
  deleteUser(id: number) {
    const index = this.users.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new NotFoundException('User not found');
    }

    const user = this.users[index];

    this.users.splice(index, 1);

    return {
      status: 200,
      message: 'User deleted successfully',
      data: user,
    };
  }
}