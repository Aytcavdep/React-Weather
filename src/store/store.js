import {combineReducers, configureStore} from "@reduxjs/toolkit";
import currentWeatherSliceReducer from './slices/currentWeatherSlice'

// const rootReducer = combineReducers({
// currentWeatherSliceReducer
// })
export const store = configureStore({
    reducer: {
        dayWeather: currentWeatherSliceReducer,
    }
})