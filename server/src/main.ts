/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200', // hoặc '*' nếu muốn mở cho tất cả
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // nếu dùng cookie hoặc header Authorization
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
