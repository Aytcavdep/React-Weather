import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Header } from "./shared/Header/Header";
import { Popup } from "./shared/Header/Popup/Popup";
import { fetchCurrentWeatherSucces } from "./store/slices/currentWeatherSlice";

function App() {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.dayWeather.loading)

  

useEffect(() => {
dispatch(fetchCurrentWeatherSucces('paris'))
}
, [])
if (loading) return (<div>Loading</div>);

  return (
    
    <div className="global-container">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact="true" />
          <Route
            path="/month-statistics"
            element={<MonthStatistics />}
            exact="true"
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
