import { Body, Controller, Get, Inject, Param, Post, Delete } from '@nestjs/common';
import { TEAM_MEMBER_SERVICE, type TeamMemberServiceContract } from '../service/team.member.service.contract';
import { CreateTeamMemberDto } from '../dto/team.member.create.dto';

@Controller('team-member')
export class TeamMemberController {
    constructor(@Inject(TEAM_MEMBER_SERVICE) private readonly teamMemberService: TeamMemberServiceContract) {}

    @Post('/create')
    create(@Body() dto: CreateTeamMemberDto) {
        return this.teamMemberService.create(dto);
    }

    @Get('/all')
    findAll() {
        return this.teamMemberService.findAll();
    }

    @Get('/:name')
    findOne(@Param('name') name: string) {
        return this.teamMemberService.findOne(name);
    }

    @Delete('/:name')
    delete(@Param('name') name: string) {
        return this.teamMemberService.delete(name);
    }
}