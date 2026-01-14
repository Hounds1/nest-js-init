import { Injectable } from "@nestjs/common";
import { CreateTeamMemberDto } from "../dto/team.member.create.dto";
import { TeamMemberServiceContract } from "./team.member.service.contract";
import { TeamMemberDto } from "../dto/team.member.dto";
import { TeamMemberRepository } from "../repository/team.member.repository";
import { UpdateTeamMemberDto } from "../dto/tem.member.update.dto";

@Injectable()
export class TeamMemberServiceImpl implements TeamMemberServiceContract {
    constructor(private readonly teamMemberRepository: TeamMemberRepository) {}

    async create(dto: CreateTeamMemberDto): Promise<TeamMemberDto> {
        return await this.teamMemberRepository.create(dto);
    }

    async findAll(): Promise<TeamMemberDto[]> {
        return await this.teamMemberRepository.findAll();
    }

    async findOne(id: number): Promise<TeamMemberDto | null> {
        return await this.teamMemberRepository.findOne(id);
    }

    async update(id: number, dto: UpdateTeamMemberDto): Promise<TeamMemberDto> {
        return await this.teamMemberRepository.update(id, dto);
    }

    async delete(id: number): Promise<boolean> {
        return await this.teamMemberRepository.delete(id);
    }
}