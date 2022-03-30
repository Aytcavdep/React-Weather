import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { changeCssRootVariables } from "../model/ChangeCssRootVariables";
import { storage } from "../model/Storage";

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setThemes] = useState(storage.getItem("theme") || "light");

  changeCssRootVariables(theme);
  function setTheme(theme) {
    storage.setItem("theme", theme);
    setThemes(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};
