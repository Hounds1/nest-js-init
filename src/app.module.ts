import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamController } from './exam.controller';
import { ExamService } from './exam.service';
import { QualifiedService } from './exam.QualifiedService';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
  ],
  controllers: [AppController, ExamController],
  providers: [AppService
    , ExamService
    , {provide: 'QUALIFIED_SERVICE', useClass: QualifiedService}],
})
export class AppModule {}
