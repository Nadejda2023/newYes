import { Module, forwardRef } from "@nestjs/common";
import { authController } from "./auth.controller";
import { authService } from "./auth.service";
import { UsersModule } from "src/users/users.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
    
    controllers: [authController],
    providers: [authService],
    imports: [ 
        forwardRef(() =>
        UsersModule),
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || 'SECRET',
        signOptions: {
            expiresIn: '24h'}
        })
    ],
    exports: [
        authService,
        JwtModule
    ]
})

export class AuthModule{}