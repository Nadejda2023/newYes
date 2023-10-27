import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { UsersController } from "./users/users.controller";
import { UsersService } from "./users/users.service";
import { User } from "./users/users.entity";
import { DataSource } from "typeorm";



@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
      ConfigModule.forRoot({
        envFilePath: `.${process.env.NODE_ENV}.env`
      }),
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: process.env.MYSQL_HOST,
          port: Number(process.env.MYSQL_PORT),
          username: process.env.MYSQL_USER,
          password: process.env.MYSQL_ROOTPASSWORD,
          database: process.env.MYSQL_DATABASE,
          entities: [User],
          migrations: ["src/migrations/*.ts"],
          autoLoadEntities: true,
          synchronize: true, 
          logging: true
          //autoLoadEntities: true чтобы автоматом записывались сущности в бд
        }),
        UsersModule,
      ],
      
})
export class AppModule {
  
}