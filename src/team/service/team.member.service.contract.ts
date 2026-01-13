import { CreateTeamMemberDto } from "../dto/team.member.create.dto";
import { TeamMemberDto } from "../dto/team.member.res.dto";

export const TEAM_MEMBER_SERVICE = Symbol('TEAM_MEMBER_SERVICE');

export interface TeamMemberServiceContract {
    create(dto: CreateTeamMemberDto): TeamMemberDto;
    findAll(): TeamMemberDto[];
    findOne(name: string): TeamMemberDto | null;
    delete(name: string): boolean;
}