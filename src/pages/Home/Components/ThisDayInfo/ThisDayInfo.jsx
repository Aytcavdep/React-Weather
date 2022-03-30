import s from "./ThisDayInfo.module.css";
import cloud from "../../../../assets/images/cloud.png";
import { ThisDayItem } from "./ThisDayItem";
import { useSelector } from "react-redux";

export const ThisDayInfo = () => {
  const weather = useSelector((state) => state.dayWeather.dayWeather);
  const { temp, humidity, pressure, feels_like } = weather.main;
  const {speed} = weather.wind;

  if (weather) {
    const items = [
      {
        icon_id: "temp",
        name: "Температура",
        value: `${temp}° - ощущается как ${feels_like}°`,
      },
      {
        icon_id: "pressure",
        name: "Давление",
        value: `${pressure}`,
      },
      {
        icon_id: "precipitation",
        name: "Влажность",
        value: `${humidity}%`,
      },
      {
        icon_id: "wind",
        name: "Ветер",
        value: `${speed} м/с `,
      },
    ];

    return (
      <div className={s.this_day_info}>
       <img className={s.cloud_img} src={cloud} alt="Облако" />
        <div className={s.this_day_info_items}>
          {items.map((item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
       
      </div>
    );
  }
};
