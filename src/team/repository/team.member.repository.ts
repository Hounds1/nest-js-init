import { CreateTeamMemberDto } from '../dto/team.member.create.dto';
import { exchange, TeamMemberDto } from '../dto/team.member.dto';
import { PrismaConnector } from "src/global/prisma/prisma.connector";
import { Prisma } from '../../generated/prisma/client';
import { Injectable } from '@nestjs/common';
import { UpdateTeamMemberDto } from '../dto/tem.member.update.dto';

type TeamMember = {
  memberId: number;
  name: string;
  age: number;
};

@Injectable()
export class TeamMemberRepository {
  constructor(private readonly connector: PrismaConnector){}

  async create(teamMember: CreateTeamMemberDto): Promise<TeamMemberDto> {
    const craeted = await this.connector.teamMember.create({
      data : {
        name: teamMember.name,
        age: teamMember.age
      }
    });

    return exchange(craeted);
  }

  async findAll(): Promise<TeamMemberDto[]> {
    return (await this.connector.teamMember.findMany()).map((m) => exchange(m));
  }

  async findOne(id: number): Promise<TeamMemberDto | null> {
    const found = await this.connector.teamMember.findFirst({
      where: { memberId: id },
    });

    if (!found) return null;
    return exchange(found);
  }

  async update(id: number, dto: UpdateTeamMemberDto): Promise<TeamMemberDto> {
    const updated = await this.connector.teamMember.update({
      where: { memberId: id },
      data: {
        name: dto.name,
        age: dto.age,
      },
    });

    return exchange(updated);
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.connector.teamMember.delete({
        where: { memberId: id },
      });

      return true;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025') 
        return false;

      throw e;
    }
  }
}