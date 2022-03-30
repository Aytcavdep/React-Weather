import { useSelector } from "react-redux";
import { IndicatorSvgSelector } from "../../../../assets/indicators/IndicatorSvgSelector";
import s from "./ThisDayInfo.module.css";

export const ThisDayItem = ({item}) => {
 console.log('25')

const { icon_id, name, value } = item;
console.log(icon_id, name, value);
  return (

    
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={s.indicator_name}>{name}</div>
      <div className={s.indicator_value}>{value}</div>
    </div>
  );

};
