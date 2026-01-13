import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamMemberController } from './team/controller/team.member.controller';
import { TEAM_MEMBER_SERVICE } from './team/service/team.member.service.contract';
import { TeamMemberServiceImpl } from './team/service/team.member.service.impl';
import { TeamMemberRepository } from './team/repository/team.member.repository';
import { ConnTestController } from './conn/controller/conn.test.controller';
import { PrismaModule } from './global/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    PrismaModule
  ],
  controllers: [AppController, TeamMemberController, ConnTestController],
  providers: [AppService, { provide: TEAM_MEMBER_SERVICE, useClass: TeamMemberServiceImpl }, TeamMemberRepository]
})
export class AppModule {}
