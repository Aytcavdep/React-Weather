import { GlobalSvgSelector } from "../../../assets/icons/global/GlobalSvgSelector";
import { dateConvert, getWeekDay } from "../../../DateConverter/dateConvert";
import s from "./Days.module.css";

export const Card = ({ day }) => {
  return (
    <div className={s.card} key={Math.random(new Date())}>
      <div className={s.day}>{getWeekDay(day.dt)}</div>
      <div className={s.day__info}>{dateConvert(day.dt)}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={day.weather[0].description} />
      </div>
      <div className={s.temp_day}>{Math.floor(day.temp.day)}°</div>
      <div className={s.temp_night}>{Math.floor(day.temp.night)}°</div>
      <div className={s.info}>{day.weather[0].description}</div>
    </div>
  );
};
