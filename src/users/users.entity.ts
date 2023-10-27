import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm";

export interface UserCreationAttrs {
    login: string;
    password: string;
    fio: string;
}

@Entity("users")

export class User {
    @PrimaryGeneratedColumn({})
    id: number;

    @ApiProperty({example: 'Nadejda', description: 'Логин пользователя'})
    @Column({ nullable: false })
    login!: string;

    @ApiProperty({example: '123456!', description: 'Пароль пользователя'})
    @Column({ nullable: false })
    password!:string;

    @ApiProperty({example: 'Попова Надежда Викторовна', description: 'ФИО пользователя'})
    @Column({ nullable: false })
    fio!:string;


    //@Column({ unique: true , nullable: false })
    //apiToken!:string;

}