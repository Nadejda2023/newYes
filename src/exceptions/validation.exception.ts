import { HttpException, HttpStatus } from "@nestjs/common";

export class ValidationException extends HttpException {
    messages: Record<string, any>;

    constructor() {
        const response: Record<string, any> = {}; // Ваш объект сообщений об ошибке
        super(response, HttpStatus.BAD_REQUEST);
        this.messages = response;
    }
}






