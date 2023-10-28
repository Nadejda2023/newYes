import { HttpService } from '@nestjs/axios';
import { Injectable} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class WeatherService {
    private readonly apiKey: string = 'd08b20d4f0bf4a90818225331232710';
  constructor(private httpService: HttpService, private configService: ConfigService) {}

  async getCurrentWeather(city: string, language = 'ru'): Promise<History> {
    try {
      const apiKey = this.configService.get('WEATHER_API_KEY');
      const response = await this.httpService
        .get('https://api.weatherapi.com/v1/current.json', {
          params: { key: this.apiKey, q: city, lang: language },
        })
        .toPromise();

      const { current } = response.data;
      const history = new History();
      history.requestResult = 200;
      history.tempC = current.temp_c;

      return history;
    } catch (error) {
      const history = new History();
      history.requestResult = error.response.status;
      history.tempC = null;
      return history;
    }
  }
}
