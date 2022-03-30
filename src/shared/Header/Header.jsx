import { useEffect, useState } from "react";
import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { useTheme } from "../../hooks/useTheme";
import s from "./Header.module.css";

export const Header = () => {
  const theme = useTheme();

  const options = [
    { value: "city-1", label: "Белгород" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Воронеж" },
  ];

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor:
        theme.theme === "dark" ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
      width: "194ps",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme.theme === "dark" ? "#fff" : "#000",
    }),
  };
  const [selectedOption, setSelectedOption] = useState(null);

  function changeTheme() {
    theme.setTheme(theme.theme === "light" ? "dark" : "light");
  }

  
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>{<GlobalSvgSelector id="header-logo" />}</div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          {<GlobalSvgSelector id="change-theme" />}
        </div>
        <div>
          <Select
            defaultValue={options[0]}
            onChange={setSelectedOption}
            options={options}
            styles={colourStyles}
          />
        </div>
      </div>
    </header>
  );
};
