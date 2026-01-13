import { Injectable } from "@nestjs/common";
import { CreateTeamMemberDto } from "../dto/team.member.create.dto";
import { TeamMemberServiceContract } from "./team.member.service.contract";
import { TeamMemberDto } from "../dto/team.member.res.dto";
import { TeamMemberRepository } from "../repository/team.member.repository";
import { BaseRes } from "src/global/res/global.base.res";

@Injectable()
export class TeamMemberServiceImpl implements TeamMemberServiceContract {
    constructor(private readonly teamMemberRepository: TeamMemberRepository) {}

    create(dto: CreateTeamMemberDto): TeamMemberDto {
        return this.teamMemberRepository.create(dto);
    }

    findAll(): TeamMemberDto[] {
        return this.teamMemberRepository.findAll();
    }

    findOne(name: string): TeamMemberDto | null {
        return this.teamMemberRepository.findOne(name);
    }

    delete(name: string): boolean {
        return this.teamMemberRepository.delete(name);
    }
}