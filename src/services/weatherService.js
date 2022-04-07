import axios from "axios";
import { appid } from "../Private/WeatherKey";

export class WeatherService {

  static async getCurrentWeather(city) {
    const responce = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${appid}`
    ); //appid is Your unique OpenWeather API key
    return responce.data;
  }

  static async getMonthWeather(city) {
    const responce = await axios.get(
      `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${city}&dt=1646341815&units=metric&appid=${appid}`
    ); //appid is Your unique OpenWeather API key. In Free subscription, Historical weather data no support.
    return responce.data;
  }
}
