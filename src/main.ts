import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //prefijo para nuestra api
  app.setGlobalPrefix('api');

  // /api/endpointName

  await app.listen(AppModule.port);
}
bootstrap();
