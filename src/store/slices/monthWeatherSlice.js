import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherService } from "../../services/weatherService";

export const fetchMonthWeatherSucces = createAsyncThunk(
  "month_weather/fetchMonthWeatherSucces",
  async (city) => {
    const responce = await WeatherService.getMonthWeather(city);
    return responce;
  }
);

export const monthWeatherSlice = createSlice({
  name: "month_weather",
  initialState: {
    monthWeather: {},
    intervalMonthWeather: {},
    loading: true,
  },
  reducers: {
    filterMonthWeather(state, action) {
      state.monthWeather.list = state.intervalMonthWeather.list.filter(
        (item, index) => index <= action.payload - 1
      );
      console.log(state.monthWeather.list);
    },
    fetchMonthWeatherError(state, action) {
      state.loading = false;
      state.responce = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
  extraReducers: {
    [fetchMonthWeatherSucces.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchMonthWeatherSucces.fulfilled]: (state, action) => {
      state.monthWeather = action.payload;
      state.intervalMonthWeather = action.payload;
      state.loading = false;
    },
    [fetchMonthWeatherSucces.rejected]: (state, action) => {
      state.monthWeather = {
        // if error fake data
        cod: "200",
        message: 0,
        city: {
          geoname_id: 1907296,
          name: "Tawarano",
          lat: 35.0164,
          lon: 139.0077,
          country: "JP",
          iso2: "JP",
          type: "",
          population: 0,
        },
        cnt: 10,
        list: [
          {
            dt: Math.round(new Date().getTime() / 1000.0),
            temp: {
              day: 15.51,
              min: 285.51,
              max: 285.51,
              night: 15.51,
              eve: 285.51,
              morn: 285.51,
            },
            pressure: 1013.75,
            humidity: 100,
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "солнечно",
                icon: "01n",
              },
            ],
            speed: 5.52,
            deg: 311,
            gust: 11.3,
            clouds: 0,
          },
          {
            dt: Math.round(new Date().getTime() / 1000.0) + 86400,
            temp: {
              day: 22.27,
              min: 282.27,
              max: 284.66,
              night: 20.66,
              eve: 282.78,
              morn: 282.56,
            },
            pressure: 1023.68,
            humidity: 100,
            weather: [
              {
                id: 800,
                main: "Rain",
                description: "дождь",
                icon: "01d",
              },
            ],
            speed: 5.46,
            deg: 66,
            gust: 11.3,
            clouds: 0,
          },
          {
            dt: Math.round(new Date().getTime() / 1000.0) + 86400 * 2,
            temp: {
              day: 14.83,
              min: 283.21,
              max: 285.7,
              night: 9.16,
              eve: 8.49,
              morn: 283.21,
            },
            pressure: 1017.39,
            humidity: 100,
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "солнечно",
                icon: "02d",
              },
            ],
            speed: 13.76,
            deg: 260,
            gust: 14.3,
            clouds: 8,
          },
          {
            dt: Math.round(new Date().getTime() / 1000.0) + 86400 * 3,
            temp: {
              day: 13.71,
              min: 281.86,
              max: 285.13,
              night: 10.81,
              eve: 284.76,
              morn: 281.86,
            },
            pressure: 1017.36,
            humidity: 100,
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "солнечно",
                icon: "01d",
              },
            ],
            speed: 8.95,
            deg: 288,
            gust: 11.3,
            clouds: 0,
          },
          {
            dt: Math.round(new Date().getTime() / 1000.0) + 86400 * 4,
            temp: {
              day: 21,
              min: 275.68,
              max: 283.75,
              night: 18.79,
              eve: 283.75,
              morn: 275.68,
            },
            pressure: 996.2,
            humidity: 0,
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "небольшой дождь",
                icon: "10d",
              },
            ],
            speed: 5.92,
            deg: 295,
            gust: 9.3,
            clouds: 0,
          },
          {
            dt: Math.round(new Date().getTime() / 1000.0) + 86400 * 5,
            temp: {
              day: 22.4,
              min: 276.69,
              max: 283.22,
              night: 20.58,
              eve: 2.22,
              morn: 276.69,
            },
            pressure: 998.07,
            humidity: 0,
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "солнечно",
                icon: "01d",
              },
            ],
            speed: 3.71,
            deg: 314,
            gust: 5.3,
            clouds: 0,
          },
          {
            dt: Math.round(new Date().getTime() / 1000.0) + 86400 * 6,
            temp: {
              day: 18.88,
              min: 276.28,
              max: 284.66,
              night: 8.2,
              eve: 8.66,
              morn: 276.28,
            },
            pressure: 997.4,
            humidity: 0,
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "небольшой дождь",
                icon: "10d",
              },
            ],
            speed: 2.1,
            deg: 337,
            gust: 5.3,
            clouds: 66,
            rain: 0.28,
          },
          {
            dt: Math.round(new Date().getTime() / 1000.0) + 86400 * 7,
            temp: {
              day: 13.58,
              min: 278.74,
              max: 283.76,
              night: 8.74,
              eve: 283.76,
              morn: 279.15,
            },
            pressure: 991.11,
            humidity: 0,
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "небольшой дождь и солнце",
                icon: "10d",
              },
            ],
            speed: 2.69,
            deg: 2,
            gust: 4.3,
            clouds: 4,
            rain: 3.72,
          },
          {
            dt: Math.round(new Date().getTime() / 1000.0) + 86400 * 8,
            temp: {
              day: 10.62,
              min: 275.86,
              max: 281.14,
              night: 6.45,
              eve: 281.14,
              morn: 275.86,
            },
            pressure: 993.37,
            humidity: 0,
            weather: [
              {
                id: 800,
                main: "Rain",
                description: "дождь",
                icon: "01d",
              },
            ],
            speed: 2.05,
            deg: 353,
            gust: 3.3,
            clouds: 47,
            rain: 0.52,
            snow: 0.03,
          },
          {
            dt: Math.round(new Date().getTime() / 1000.0) + 86400 * 9,
            temp: {
              day: 17.26,
              min: 275.51,
              max: 281.61,
              night: 16.55,
              eve: 281.61,
              morn: 275.51,
            },
            pressure: 991.72,
            humidity: 0,
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "небольшой дождь",
                icon: "10d",
              },
            ],
            speed: 3.47,
            deg: 326,
            gust: 5.3,
            clouds: 2,
            rain: 0.35,
          },
        ],
      };
      state.intervalMonthWeather = state.monthWeather;
      state.loading = false;
    },
  },
});
export const { filterMonthWeather } = monthWeatherSlice.actions;
export default monthWeatherSlice.reducer;
