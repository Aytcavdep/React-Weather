import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherService } from "../../services/weatherService";

// const initialState = {
//   weather: {
//     main: {
//       temp: 0,
//       humidity: 0,
//       pressure: 0,
//       feels_like: 0,
//     },
//     weather: [
//       {
//         description: "",
//       },
//     ],
//   },
//   isLoading: false,
//   responce: {
//     status: 0,
//     message: "",
//   },
// };

export const fetchCurrentWeatherSucces = createAsyncThunk (
  "current_weather/fetchCurrentWeatherSucces",
  async (city) => {
    const responce = await WeatherService.getCurrentWeather(city);
    // console.log(responce)
    // const data = JSON.parse(responce);
    // console.log(data)
    return responce
  }

)

export const currentWeatherSlice = createSlice({
  name: "current_weather",
  initialState: {
    dayWeather: {},
      loading: true,
  },
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherError(state, action) {
      state.isLoading = false;
      state.responce = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
  extraReducers: 
  {
    [fetchCurrentWeatherSucces.pending]: (state, action) => {
      state.loading = true;

    },
    [fetchCurrentWeatherSucces.fulfilled]: (state, action) => {
      state.dayWeather = action.payload;
      state.loading = false;
    }
  },
});

export default currentWeatherSlice.reducer;
