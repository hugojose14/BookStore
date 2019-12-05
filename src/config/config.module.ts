import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      //instancia de nuestro servicio ConfigService
      useValue: new ConfigService(),
    },
  ],

  exports: [ConfigService],
})
export class ConfigModule {}
