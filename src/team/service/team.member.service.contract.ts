import { BaseRes } from "src/global/res/global.base.res";
import { CreateTeamMemberDto } from "../dto/team.member.create.dto";
import { TeamMemberDto } from "../dto/team.member.res.dto";

export const TEAM_MEMBER_SERVICE = Symbol('TEAM_MEMBER_SERVICE');

export interface TeamMemberServiceContract {
    create(dto: CreateTeamMemberDto): BaseRes<TeamMemberDto>;
    findAll(): BaseRes<TeamMemberDto[]>;
    findOne(name: string): BaseRes<TeamMemberDto | null>;
    delete(name: string): BaseRes<boolean>;
}