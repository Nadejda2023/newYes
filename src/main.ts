import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
     const PORT = process.env.PORT || 5555;
     const app = await NestFactory.create(AppModule) //добавить модуль

     await app.listen(PORT, () => console.log('Server started on port = ${PORT}'))
}

start()