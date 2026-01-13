import { Controller, Get } from "@nestjs/common";
import { PrismaConnector } from "src/global/prisma/prisma.connector";

@Controller('conn-test')
export class ConnTestController {
    constructor(private readonly prisma: PrismaConnector){}

    @Get('/prisma')
    async connection() {
        return await this.prisma.$queryRaw`SELECT 1`;
    }
}