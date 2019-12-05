import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    //configuracion para ver si estoy en desarrollo
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';

    if (isDevelopmentEnv) {
      //si estamos en desarroll configurar neuestras variables de desarrollo
      const envFilePath = __dirname + '/../../.env';
      const existsPath = fs.existsSync(envFilePath);

      if (!existsPath) {
        console.log('.env file oes not exist');
        process.exit(0);
      }

      //path me convierte a un objeto literal de js
      this.envConfig = parse(fs.readFileSync(envFilePath));
    }
    //si estamos en produccion
    else {
      this.envConfig = {
        PORT: process.env.PORT,
      };
    }
  }

  //un método que nos devuelva el key específico
  get(key: string): string {
    return this.envConfig[key];
  }
}
