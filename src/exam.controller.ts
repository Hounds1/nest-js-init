import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateExamDto } from './exam.dto';
import { ExamService } from './exam.service';
import type { IQualifiedService } from './exam.IQualifiedService';

@Controller('exam')
export class ExamController {

    // Spring의 @RequiredArgsConstruct + private final 조합의 주입과 유사
    // 생성자 주입 + 필드 할당
    constructor(
        private readonly examService: ExamService,
        @Inject('QUALIFIED_SERVICE') private readonly qualifiedService: IQualifiedService
    ) {}

    // Spring의 @PostMapping("/element")와 유사
    @Post('/create')
    create(@Body() dto: CreateExamDto) {
        return this.examService.create(dto);
    }

    @Post('/qualified')
    qualified(@Body() dto: CreateExamDto) {
        return this.qualifiedService.create(dto);
    }
}