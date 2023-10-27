import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create_user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.entity";


@ApiTags('Пользователи')
@Controller("users")
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})

    @Post("create") 
    createUsers(@Body() userDto:CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

 

   
}