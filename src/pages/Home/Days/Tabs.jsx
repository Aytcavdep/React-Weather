import s from "./Days.module.css";

export const Tabs = () => {
  const tabs = [
    { value: "На неделю" },
    { value: "На 10 дней" },
    { value: "на месяц " },
  ];

  return (
    <div className={s.tabs}>
      <div className={s.tabs_wrapper}>
        {" "}
        {tabs.map((tab) => (
          <div className={s.tab +" " +s.active} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  );
};
