import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { WeatherService } from './weather.service';
import { CurrentWeatherDto } from './dto/current-weather.dto';


@ApiTags('Weather')
@Controller('weather')


export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @UseGuards(JwtAuthGuard)
  @Post('current')
  async getCurrentWeather(@Body() currentWeatherDto: CurrentWeatherDto): Promise<History> {
    return this.weatherService.getCurrentWeather(currentWeatherDto.city, currentWeatherDto.language);
  }
}
