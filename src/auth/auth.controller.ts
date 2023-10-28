import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/create_user.dto";
import { authService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";

@ApiTags('Authorization')
@Controller("auth")
export class authController {

    constructor(private authService: authService) {}

    @UseGuards(JwtAuthGuard)
    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)

    }

    //@UseGuards(JwtAuthGuard)
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }


}