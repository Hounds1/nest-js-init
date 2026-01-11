import { Injectable } from "@nestjs/common";
import { CreateTeamMemberDto } from "../dto/team.member.create.dto";
import { TeamMemberServiceContract } from "./team.member.service.contract";
import { TeamMemberDto } from "../dto/team.member.res.dto";
import { TeamMemberRepository } from "../repository/team.member.repository";
import { BaseRes } from "src/global/res/global.base.res";

@Injectable()
export class TeamMemberServiceImpl implements TeamMemberServiceContract {
    constructor(private readonly teamMemberRepository: TeamMemberRepository) {}

    create(dto: CreateTeamMemberDto): BaseRes<TeamMemberDto> {
        const res = this.teamMemberRepository.create(dto);
        return BaseRes.exchange(res).addExtension('test', 1234);
    }

    findAll(): BaseRes<TeamMemberDto[]> {
        const res = this.teamMemberRepository.findAll();
        return BaseRes.exchange(res);
    }

    findOne(name: string): BaseRes<TeamMemberDto | null> {
        const res = this.teamMemberRepository.findOne(name);
        return BaseRes.exchange(res);
    }

    delete(name: string): BaseRes<boolean> {
        const result = this.teamMemberRepository.delete(name);
        return BaseRes.exchange(result);
    }
}