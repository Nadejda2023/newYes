import { Injectable} from '@nestjs/common';
import axios from 'axios';



@Injectable()
export class WeatherService {
    private readonly apiUrl = 'https://api.weatherapi.com/v1';
  
    async getCurrentWeather(city: string, language = 'ru'): Promise<any> {
        const apiKey = 'd08b20d4f0bf4a90818225331232710'; 
        const endpoint = '/current.json';
    
        try {
          const response = await axios.get(`${this.apiUrl}${endpoint}`, {
            params: { key: apiKey, q: city, lang: language },
          });
    
          return response.data; 
        } catch (error) {
          throw new Error('Ошибка при получении данных о погоде');
        }
      }
    }
  
  
  
  
  
  
  
  

  
  
  
     

     
    
     
    
    
     
    
  

