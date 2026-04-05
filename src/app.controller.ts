import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// The AppController class is decorated with the @Controller() decorator, which marks it as a NestJS controller.
@Controller()
export class AppController {
  // The constructor of the AppController class takes an instance of the AppService class as a parameter. The AppService is injected into the controller using NestJS's dependency injection system.
  constructor(private readonly appService: AppService) {}

  // The getHello() method is decorated with the @Get() decorator, which maps HTTP GET requests to this method. When a GET request is made to the root URL ("/"), this method will be called. The method returns a string, which is obtained by calling the getHello() method of the AppService instance.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
