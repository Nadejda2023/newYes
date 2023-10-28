import { ApiProperty } from "@nestjs/swagger";
import { UserCreationAttrs } from "../users.entity";
import { IsString, Length, Matches } from "class-validator";

export class CreateUserDto implements UserCreationAttrs {
   @ApiProperty({example: '1'})
   readonly id : number;

   @ApiProperty({example: 'Nadejda', description: 'Логин пользователя'})
   @IsString({message: 'Должно быть строкой'})
   readonly login! : string;

   @ApiProperty({example: '12345!', description: 'Пароль пользователя'})
   @IsString({message: 'Должно быть строкой'})
   @Length(6, 16, {message: 'Должно быть не короче 6 и не больше 16'})
   @Matches(/[.,!_]/, { message: 'Пароль должен содержать один из символов: . , ! _' })
   password! : string;
   
   @ApiProperty({example: 'Попова Надежда Викторовна', description: 'ФИО пользователя'})
   @IsString({message: 'Должно быть строкой'})
   readonly fio! : string; 
   

    
}