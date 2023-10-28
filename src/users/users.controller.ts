import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dto/create_user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.entity";


@ApiTags('Users registration')
@Controller("users")
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'registration'})
    @ApiResponse({status: 200, type: User})
    @UsePipes(ValidationPipe)

    @Post("create") 
    createUsers(@Body() userDto:CreateUserDto) {
        console.log(userDto)
        return this.usersService.createUser(userDto);
    }

 

   
}