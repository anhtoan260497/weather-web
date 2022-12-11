import React from 'react';
import './styles.scss'
import PropTypes from 'prop-types';

WeatherIcon.propTypes = {
    
};

function WeatherIcon(props) {
    return (
        <div className='weather-icon'>
            <img src='/assets/icons/cloudy.svg' alt='hihi'/>
            <p className='degree'>25°C</p>
            <p className='mt-1 text-center'>25/11</p>
        </div>
    );
}

export default WeatherIcon;