export const dateConvert = (UNIX_Timestamp) => {
  const fullDate = new Date(UNIX_Timestamp * 1000);
  const month = [
    "Янв",
    "Февр",
    "Март",
    "Апр",
    "Май",
    "Июнь",
    "Июль",
    "Авг",
    "Сент",
    "Окт",
    "Нояб",
    "Дек",
  ];
  const numberMonth = fullDate.getMonth();
  let dayMonth = fullDate.getDate();
  dayMonth = dayMonth < 10 ? "0" + dayMonth : dayMonth;
  return `${dayMonth} ${month[numberMonth]}`;
};

export const getWeekDay = (UNIX_Timestamp) => {
  const fullDate = new Date(UNIX_Timestamp * 1000);
  const numberMonth = fullDate.getMonth();
  let dayMonth = fullDate.getDate();
  const today = new Date();
  const weekDay = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  const numberWeekDay = fullDate.getDay();
  const numberMonthToday = today.getMonth();
  let dayMonthToday = today.getDate();
  if (numberMonth == numberMonthToday && dayMonth == dayMonthToday)
    return "Сегодня";
  return weekDay[numberWeekDay];
};
