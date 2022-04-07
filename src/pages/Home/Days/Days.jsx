import { Card } from "./Card";
import s from "./Days.module.css";
import { Tabs } from "./Tabs";
import { useSelector } from "react-redux";

export const Days = () => {
  const days = useSelector((state) => state.monthWeather.monthWeather.list);
  if (days) {

    return (
      <>
        <Tabs />
        <div className={s.days}>
          {days.map((day) => (
            <Card day={day} key={Math.random(Date.now())} />
          ))}
        </div>
      </>
    );
  }
  return <div>Loading</div>;
};
