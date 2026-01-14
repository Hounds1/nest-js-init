import { IsInt, IsString, Min } from 'class-validator';

export class UpdateTeamMemberDto {

    @IsString()
    name: string;

    @IsInt()
    @Min(1)
    age: number;
}