import 'antd/dist/antd.css';
import { Card } from "./Card";
import s from "./Days.module.css";
import { Tabs } from "./Tabs";
import { useSelector } from "react-redux";
import { Spin } from "antd";

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
  return <Spin className="spinner" size="large" />;
};
