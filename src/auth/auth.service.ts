import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create_user.dto";
import { UsersService } from "src/users/users.service";
import * as bcrypt from 'bcrypt'
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/users.entity";

@Injectable()
export class authService {

    constructor(private userService: UsersService,
                private JwtService: JwtService ) {}

    
    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
        
    }

    
    async registration( userDto: CreateUserDto) {
        const polzv = await this.userService.getUsersByLogin(userDto.login);
        if(polzv) {
            throw new HttpException('Пользователь с таким логином уже существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 10);
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
        
    }

    private async generateToken(user: User) {
        const payload = {login: user.login, id: user.id, fio: user.fio}
        return {
            fio: user.fio,
            token: this.JwtService.sign(payload)
        }

    }
    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUsersByLogin(userDto.login);
        if (user) {
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (passwordEquals) {
            return user;
        }
    }
        throw new UnauthorizedException({message: 'Некорректный логин или пароль'})
    }

}