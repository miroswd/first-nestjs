import { Controller, Get } from '@nestjs/common';

@Controller({ path: 'cats' })
export class CatsController {
  @Get() // HTTP request decorator to handle for specific endpoint for HTTP requests
  findAll(): string {
    return 'This action returns all cats';
  }
}
