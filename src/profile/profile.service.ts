import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async create(user: any): Promise<Profile> {
    return await this.profileRepository.save(user);
  }

  findById(id: number): Promise<Profile> {
    return this.profileRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.profileRepository.delete(id);
  }
}
