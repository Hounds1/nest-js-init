import { IsInt, IsString, Min } from 'class-validator';
import { CreateTeamMemberDto } from './team.member.create.dto';
import { plainToInstance } from 'class-transformer';
import { TeamMember } from '../../generated/prisma/client';

export class TeamMemberDto {
    @IsInt()
    memeberId: number;
    
    @IsString()
    name: string;

    @IsInt()
    @Min(1)
    age: number;
}

export function exchange(origin: TeamMember | CreateTeamMemberDto): TeamMemberDto {
    return plainToInstance(TeamMemberDto, {
      memberId: 'memberId' in origin ? origin.memberId : undefined,
      name: origin.name,
      age: origin.age,
    });
  }