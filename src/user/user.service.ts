import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: number) {
    return await this.usersRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userToUpdate = await this.findOne(id);

    if (!userToUpdate) throw new NotFoundException();

    Object.assign(userToUpdate, updateUserDto);

    return await this.usersRepository.save(userToUpdate);
  }

  async remove(id: number) {
    const userToRemove = await this.findOne(id);

    if (!userToRemove) throw new NotFoundException();

    return await this.usersRepository.delete(userToRemove);
  }
}
