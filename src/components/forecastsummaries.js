import React from 'react';
import ForecastSummary from './forecastsummary'
import PropTypes from 'prop-types'
import '../styles/forecast-summaries.css'

const ForecastSummaries = (props) => {
    return(
    <div className='forecast-summaries'>
        {
            props.forecasts.map(forecast => {
                return(
                <ForecastSummary 
                    key={forecast.date}
                    date={forecast.date}
                    icon={forecast.icon}
                    temperature={forecast.temperature.max}
                    description={forecast.description}
                    onSelect={props.onForecastSelect}
                /> 
                )
                })
        }
    </div>
    )
}

ForecastSummaries.propTypes = {
    forecasts: PropTypes.array.isRequired,
    onForecastSelect: PropTypes.func.isRequired
}

export default ForecastSummaries;

