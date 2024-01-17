import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('main') // Render the 'main' EJS template
  main() {
    return { title: 'Home Page' }; // Pass data to the template
  }

  @Get('live')
  @Render('livePage') // Render the 'main' EJS template
  live() {
    return { title: 'Live Page' }; // Pass data to the template
  }

  @Get('my-page')
  @Render('channelInfo') // Render the 'main' EJS template
  myInfo() {
    return { title: 'My Page' }; // Pass data to the template
  }
}
