import { CreateTeamMemberDto } from "../dto/team.member.create.dto";
import { TeamMemberDto } from "../dto/team.member.dto";
import { UpdateTeamMemberDto } from "../dto/tem.member.update.dto";

export const TEAM_MEMBER_SERVICE = Symbol('TEAM_MEMBER_SERVICE');

export interface TeamMemberServiceContract {
    create(dto: CreateTeamMemberDto): Promise<TeamMemberDto>;
    findAll(): Promise<TeamMemberDto[]>;
    findOne(id: number): Promise<TeamMemberDto | null>;
    update(id:number, dto: UpdateTeamMemberDto): Promise<TeamMemberDto>
    delete(id: number): Promise<boolean>;
}