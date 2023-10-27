import { Body, Controller, Get, Module, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create_user.dto";
import { UsersService } from "./users.service";


@Controller("users")
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post("create") 
    create(@Body() userDto:CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @Get("getAll")
    getAll() {
        return this.usersService.getAllUsers();
    }
}