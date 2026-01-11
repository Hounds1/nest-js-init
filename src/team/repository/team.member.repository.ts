import { CreateTeamMemberDto } from '../dto/team.member.create.dto';
import { exchange, TeamMemberDto } from '../dto/team.member.res.dto';

export class TeamMemberRepository {
  private readonly teamMembers: CreateTeamMemberDto[] = [];

  create(teamMember: CreateTeamMemberDto): TeamMemberDto {
    this.teamMembers.push(teamMember);
    return exchange(teamMember);
  }

  findAll(): TeamMemberDto[] {
    return this.teamMembers.map((m) => exchange(m));
  }

  findOne(id: string): TeamMemberDto | null {
    const found = this.teamMembers.find((m) => m.name === id);
    return found ? exchange(found) : null;
  }

  delete(id: string): boolean {
    const idx = this.teamMembers.findIndex((m) => m.name === id);
    if (idx < 0) return false;
    this.teamMembers.splice(idx, 1);
    return true;
  }
}