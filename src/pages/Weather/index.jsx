import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import WeatherForecast from "../../components/WeatherForecast";
import WeatherInfo from "../../components/WeatherInfo";

Weather.propTypes = {};

function Weather(props) {
  return (
    <div id="weather" className="flex gap-2">
      <WeatherForecast />
      <WeatherInfo />
    </div>
  );
}

export default Weather;
