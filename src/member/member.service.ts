import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createMemberDto, updateMemberDto } from './dto/member.dto';
import { Member } from './member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member) private membersRepository: Repository<Member>,
  ) {}

  getAll(): Promise<Member[]> {
    return this.membersRepository.find();
  }

  async getMemberById(id: number): Promise<Member> {
    try {
      const member = await this.membersRepository.findOneOrFail(id);
      return member;
    } catch (error) {
      throw error;
    }
  }

  createMember(payload: createMemberDto): Promise<Member> {
    const newMember = this.membersRepository.create(payload);
    return this.membersRepository.save(newMember);
  }

  async updateMember(payload: updateMemberDto): Promise<Member> {
    const { id, name, code } = payload;
    const member = await this.getMemberById(id);

    member.name = name;
    member.code = code;
    return this.membersRepository.save(member);
  }

  async deleteMember(id: number): Promise<Member> {
    const member = await this.getMemberById(id);

    return this.membersRepository.remove(member);
  }
}
