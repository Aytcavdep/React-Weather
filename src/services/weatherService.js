import axios from "axios";

export class WeatherService {
        static async getCurrentWeather(city){
                const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=Add OpenWeatherMap Token`)
                return responce.data;
     }
     
}
