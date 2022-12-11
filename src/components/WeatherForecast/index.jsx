import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import Search from "../Search";
import Dashboard from "../Dashboard";
import { useSelector } from "react-redux";

WeatherForecast.propTypes = {};

function WeatherForecast(props) {
  const date = useSelector((state) => state.dateSlice);

  return (
    <div className="weather-forecast">
      <Search />
      <p className="weather-forecast-title flex justify-between items-end">
        <span className="bold">
          Weather <span>Forecast</span>
        </span>
        {date}
      </p>

      <Dashboard />
    </div>
  );
}

export default WeatherForecast;
