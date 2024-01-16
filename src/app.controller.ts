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
}
