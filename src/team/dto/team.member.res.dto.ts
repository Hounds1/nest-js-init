import { IsInt, IsString, Min } from 'class-validator';
import { CreateTeamMemberDto } from './team.member.create.dto';
import { plainToInstance } from 'class-transformer';

export class TeamMemberDto {
    @IsString()
    name: string;

    @IsInt()
    @Min(1)
    age: number;
}

export function exchange<T extends CreateTeamMemberDto>(origin: T): TeamMemberDto {
    return plainToInstance(TeamMemberDto, {
        name: origin.name,
        age: origin.age
    });
}