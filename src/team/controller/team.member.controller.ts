import { Body, Controller, Get, Inject, Param, Post, Delete, Patch } from '@nestjs/common';
import { TEAM_MEMBER_SERVICE, type TeamMemberServiceContract } from '../service/team.member.service.contract';
import { CreateTeamMemberDto } from '../dto/team.member.create.dto';
import { UpdateTeamMemberDto } from '../dto/tem.member.update.dto';

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

    @Get('/:id')
    findOne(@Param('id') id: number) {
        return this.teamMemberService.findOne(id);
    }

    @Patch("/:id")
    update(@Param('id') id: number, @Body() dto: UpdateTeamMemberDto) {
        return this.teamMemberService.update(id, dto);
    }

    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.teamMemberService.delete(id);
    }
}