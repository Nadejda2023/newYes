import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { WeatherService } from './weather.service';
import { WeatherRequestDto } from './dto/current-weather.dto';



@ApiTags('Погода')
@Controller('weather')


export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @UseGuards(JwtAuthGuard)
  @Post('current')
  async getCurrentWeather(@Body() weatherRequest: WeatherRequestDto) {
    const { city, language } = weatherRequest;
    const weatherData = await this.weatherService.getCurrentWeather(city, language);
    return weatherData;
  }
}
