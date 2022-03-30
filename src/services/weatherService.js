import axios from "axios";

export class WeatherService {
        static async getCurrentWeather(city){
                const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fb9da40501bccdd89c4e4a2c9471c122`)
                return responce.data;
     }
     
}