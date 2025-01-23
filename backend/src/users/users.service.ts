import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient, Prisma } from '@prisma/client';

type User = PrismaClient['user'];

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: CreateUserRequest): Promise<User> {
    await this.prismaService.user.create({ 
      data : {},
    });
  }
}
