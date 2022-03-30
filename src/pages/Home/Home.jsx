import { useSelector } from "react-redux";
import { ThisDay } from "./Components/ThisDay/ThisDay";
import { ThisDayInfo } from "./Components/ThisDayInfo/ThisDayInfo";
import { Days } from "./Days/Days";
import s from "./Home.module.css";
export const Home = () => {

  
const weather = useSelector(state => state.dayWeather.dayWeather)
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay/>
        <ThisDayInfo/>
      </div>
      <Days/>
    </div>
  );
};
