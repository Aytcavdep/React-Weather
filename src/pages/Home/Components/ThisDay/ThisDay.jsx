import { useSelector } from "react-redux";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { dateConvert } from "../../../../DateConverter/dateConvert";
import s from "./ThisDay.module.css";

export const ThisDay = () => {
  const weather = useSelector((state) => state.dayWeather.dayWeather);
  if (weather)
    return (
      <div className={s.this_day}>
        <div className={s.top_block}>
          <div className={s.top_block_wrapper}>
            <div className={s.this_temp}>{Math.floor(weather.main.temp)}°</div>
            <div className={s.this_day_name}>Сегодня</div>
            <div className={s.this_city}>{dateConvert(weather.dt)}</div>
            <div className={s.this_city}>{weather.weather[0].description}</div>
          </div>
          <GlobalSvgSelector id={weather.weather[0].description} />
        </div>
        <div className={s.bottom_block}>
          <div className={s.this_time}>
            Время:{" "}
            <span>{`${new Date().getHours()}:${new Date().getMinutes()}`}</span>
          </div>
          <div className={s.this_city}>
            Город: <span>{weather.name}</span>
          </div>
        </div>
      </div>
    );
  return <div>Loading</div>;
};
