import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UsersModule } from './users/users.module';

/**
 * The AppModule is the root module of the NestJS application. It imports other modules, declares controllers, and provides services that can be used throughout the application.
 * In this example, the AppModule does not import any other modules, but it declares the AppController and provides the AppService. 
 * The AppController is responsible for handling incoming HTTP requests and returning responses, while the AppService contains the business logic that can be used by the controller or other parts of the application.
 * By using the @Module decorator, we can define the structure of our application and how different components interact with each other. This modular approach allows for better organization and maintainability of the codebase.
 * In summary, the AppModule serves as the main entry point for the NestJS application, and it is where we can configure the various components that make up our application.
 * Note: The TypeScript version used in this project is 6.0.2, the module system is NodeNext, the module resolution strategy is NodeNext, and the target version of JavaScript is ES2023. These settings ensure that the code is compatible with modern JavaScript features and can be executed in a Node.js environment.
 */
@Module({
  imports: [PostModule , UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
