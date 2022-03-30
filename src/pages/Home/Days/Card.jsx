import { GlobalSvgSelector } from "../../../assets/icons/global/GlobalSvgSelector";
import s from "./Days.module.css";

export const Card = ({ day }) => {
  return (
    <div className={s.card} key={Math.random(new Date())}>
      <div className={s.day}>{day.day}</div>
      <div className={s.day__info}>{day.day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={day.icon_id} />
      </div>
      <div className={s.temp_day}>{day.temp_day}</div>
      <div className={s.temp_night}>{day.temp_night}</div>
      <div className={s.info}>{day.info}</div>
    </div>
  );
};
