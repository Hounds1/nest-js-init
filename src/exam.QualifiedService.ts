import { Injectable } from '@nestjs/common';
import { CreateExamDto } from './exam.dto';

@Injectable()
export class QualifiedService {
    create(dto: CreateExamDto) {
        return {
            success: true,
            data: dto
        };
    }
}