import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherService } from "../../services/weatherService";
import { storage } from "../../model/Storage";

export const fetchCurrentWeatherSucces = createAsyncThunk(
  "current_weather/fetchCurrentWeatherSucces",
  async (city) => {
    const responce = await WeatherService.getCurrentWeather(city);
    return responce;
  }
);

export const currentWeatherSlice = createSlice({
  name: "current_weather",
  initialState: {
    dayWeather: {},
    city: storage.getItem("city").value,
    loading: true,
  },
  reducers: {
    cityOption(state, action) {
      state.city = action.payload;
      storage.setItem("city", action.payload);
    },
    fetchCurrentWeatherError(state, action) {
      state.isLoading = false;
      state.responce = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
  extraReducers: {
    [fetchCurrentWeatherSucces.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCurrentWeatherSucces.fulfilled]: (state, action) => {
      state.dayWeather = action.payload;
      state.loading = false;
    },
    [fetchCurrentWeatherSucces.rejected]: (state, action) => {
      state.dayWeather = {
        // if error fake data
        coord: {
          lon: 2.3488,
          lat: 48.8534,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "пасмурно",
            icon: "04n",
          },
        ],
        base: "stations",
        main: {
          temp: 11.42,
          feels_like: 10.68,
          temp_min: 10.56,
          temp_max: 12.27,
          pressure: 1012,
          humidity: 79,
        },
        visibility: 10000,
        wind: {
          speed: 3.6,
          deg: 250,
        },
        clouds: {
          all: 100,
        },
        dt: 1649190675,
        sys: {
          type: 2,
          id: 2012208,
          country: "FR",
          sunrise: 1649136009,
          sunset: 1649183169,
        },
        timezone: 7200,
        id: 2988507,
        name: "Париж",
        cod: 200,
      };
      state.loading = false;
    },
  },
});

// export const {cityOption} = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
