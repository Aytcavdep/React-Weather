import { useDispatch } from "react-redux";
import { filterMonthWeather } from "../../../store/slices/monthWeatherSlice";
import s from "./Days.module.css";

export const Tabs = () => {
  const tabs = [
    { value: 7, title: "На неделю" },
    { value: 10, title: "На 10 дней" },
    { value: 30, title: "На месяц" },
  ];
  const dispatch = useDispatch();

  const changeCard = (value) => {
    dispatch(filterMonthWeather(value));
  };

  return (
    <div className={s.tabs}>
      <div className={s.tabs_wrapper}>
        {" "}
        {tabs.map((tab) => (
          <div
            onClick={() => changeCard(tab.value)}
            className={s.tab + " " + s.active}
            key={tab.value}
          >
            {tab.title}
          </div>
        ))}
      </div>
      {/* <div className={s.cancel}>Отменить</div> */}
    </div>
  );
};
