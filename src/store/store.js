import { configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from "./slices/currentWeatherSlice";
import monthWeatherSlice from "./slices/monthWeatherSlice";

export const store = configureStore({
  reducer: {
    dayWeather: currentWeatherSliceReducer,
    monthWeather: monthWeatherSlice,
  },
});
