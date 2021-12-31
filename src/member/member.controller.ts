import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { createMemberDto, findMemberDto } from './dto/member.dto';
import { Member } from './member.entity';
import { MemberService } from './member.service';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  async getAllMember(): Promise<Member[]> {
    return this.memberService.getAll();
  }

  @Get(':memberId')
  async getBookById(
    @Param('memberId') memberId: number,
  ): Promise<findMemberDto> {
    return this.memberService.getMemberById(memberId);
  }

  @Post()
  addBook(@Body() body: createMemberDto): Promise<findMemberDto> {
    return this.memberService.createMember(body);
  }

  @Delete(':memberId')
  async deleteMember(
    @Param('memberId') memberId: number,
  ): Promise<findMemberDto> {
    return this.memberService.deleteMember(memberId);
  }
}
