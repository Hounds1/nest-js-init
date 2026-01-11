import { Injectable } from '@nestjs/common';
import { CreateExamDto } from './exam.dto';

@Injectable()
export class ExamService {
    create(dto: CreateExamDto) {
        return {
            success: true,
            data: dto
        };
    }
}