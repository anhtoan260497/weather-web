import React, { useEffect } from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import WeatherIcon from "../WeatherIcon";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import IQAirSVg from "../../helper/iqair";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

Dashboard.propTypes = {};

function Dashboard(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
  };

  const labels = ["25/11", "26/11", "27/11", "28/11", "29/11", "30/11", "1/12"];

  const data = {
    labels,
    datasets: [
      {
        label: "Degree",
        data: [1, 2, 3],
        backgroundColor: "rgb(33, 73, 170)",
      },
    ],
  };

  useEffect(() => {}, []);

  return (
    <div className="dashboard">
      <div className="dashboard-weather-condition flex items-center justify-between">
        <WeatherIcon />
        <WeatherIcon />
        <WeatherIcon />
        <WeatherIcon />
        <WeatherIcon />
      </div>

      <div className="dashboard-weather-info">
        <Bar options={options} data={data} />
      </div>

      <div className="dashboard-weather-iqa flex justify-betwwen">
        <div className="dashboard-weather-iqa-icon">
          <img src={IQAirSVg.hazardous.imgPath} alt="icon" />
        </div>
        <div className="dashboard-weather-iqa-description flex gap-2">
          <p className="dashboard-weather-iqa-description-value flex items-center justify-center">
            250
          </p>
          <p className="status flex items-center justify-center">{IQAirSVg.hazardous.name}</p>
          <div className="location flex items-center justify-center">
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
            <p>Hanoi, Vietnam</p>
          </div>
        </div>
      </div>

      <a href="/" className="github-link flex justify-center items-center gap-2"><FontAwesomeIcon icon={faGithub}/> Github</a>
    </div>
  );
}

export default Dashboard;
