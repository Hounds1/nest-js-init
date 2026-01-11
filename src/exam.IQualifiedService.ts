import { CreateExamDto } from "./exam.dto";

export const EXAM_SERVICE = Symbol('QUALIFIED_SERVICE');

export interface IQualifiedService {
    create(dto: CreateExamDto): { success: boolean, data: CreateExamDto };
}