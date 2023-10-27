import { ApiProperty } from "@nestjs/swagger";
import { UserCreationAttrs } from "../users.entity";

export class CreateUserDto implements UserCreationAttrs {

   @ApiProperty({example: 'Nadejda', description: 'Логин пользователя'})
   readonly login! : string;

   @ApiProperty({example: '12345!', description: 'Пароль пользователя'})
   readonly password! : string;
   
   @ApiProperty({example: 'Попова Надежда Викторовна', description: 'ФИО пользователя'})
   readonly fio! : string; 
    
}