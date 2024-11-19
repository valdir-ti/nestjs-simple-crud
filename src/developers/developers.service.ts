import { HttpException, Injectable } from '@nestjs/common';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { Repository } from 'typeorm';
import { Developer } from './entities/developer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DevelopersService {
  constructor(
    @InjectRepository(Developer)
    private readonly repository: Repository<Developer>,
  ) {}

  async create(dto: CreateDeveloperDto) {
    const existingDeveloper = await this.findByEmail(dto.email);
    if (existingDeveloper) {
      throw new HttpException('Email already in use', 409);
    }
    return this.create(dto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  findByEmail(email: string) {
    return this.repository.findOneBy({ email });
  }

  async update(id: string, dto: UpdateDeveloperDto) {
    const developer = await this.repository.findOneBy({ id });
    if (!developer) return null;
    this.repository.merge(developer, dto);
    return this.repository.save(developer);
  }

  async remove(id: string) {
    const developer = await this.repository.findOneBy({ id });
    if (!developer) return null;
    return this.repository.remove(developer);
  }
}
