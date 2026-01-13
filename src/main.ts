import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { WrapResponseInterceptor } from './global/interceptors/global.res.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new WrapResponseInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  )

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest Swagger')
    .setDescription('Nest Swagger')
    .setVersion('1.0')
    .build();

  const docs = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, docs);

  const confService = app.get(ConfigService);
  const port = confService.get<number>('PORT') ?? 3000;

  await app.listen(port);
}
bootstrap();
