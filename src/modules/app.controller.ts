import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
    @Get()
    index() {
        console.log("dsdsd");
        console.log("dsdsd");
        console.log("dfdsdsd");
        console.log("dsdsd");
        console.log("dsdsd");
        return "Hello There!!!";
    }
}