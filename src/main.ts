import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // create the Nest application instance using the AppModule
  /**
   * The NestFactory.create() method is used to create an instance of the Nest application. It takes the root module (AppModule) as an argument, which is the starting point of the application. The AppModule is where you define your application's structure, including controllers, providers, and other modules. Once the application instance is created, you can configure it further or start it by calling the listen() method.
   * In this code, we are creating the Nest application using the AppModule and then starting the application by listening on a specified port. The port is determined by the environment variable PORT, and if it's not set, it defaults to 3000. This allows the application to be flexible and adaptable to different environments without hardcoding the port number.
   * Overall, this code is the entry point of the NestJS application, where the application is initialized and started.
   * The NestFactory is a class provided by the NestJS framework that is responsible for creating and configuring the Nest application. It provides various methods to create different types of applications, such as HTTP applications, microservices, and WebSocket applications. In this case, we are using the create() method to create an HTTP application based on the AppModule. The create() method returns a promise that resolves to the application instance, which we can then use to start the server and listen for incoming requests.
   */
  const app = await NestFactory.create(AppModule);
  // start the application and listen on the specified port (default to 3000 if not set in environment variables)
  await app.listen(process.env.PORT ?? 3000);
}

/**
 * The bootstrap function is an asynchronous function that initializes and starts the NestJS application. It creates an instance of the application using the NestFactory and the AppModule, and then it listens for incoming requests on a specified port. The port can be set through an environment variable (PORT), and if it's not set, it defaults to 3000. This allows for flexibility in different deployment environments. The bootstrap function is called at the end of the file to kickstart the application when the script is executed.
 */
bootstrap();
