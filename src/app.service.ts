import { Injectable } from '@nestjs/common';

// The AppService class is decorated with the @Injectable() decorator, which marks it as a provider that can be injected into other classes. This allows the AppService to be used in the AppController class through dependency injection.

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
