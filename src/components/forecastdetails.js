import PropTypes from 'prop-types'
import '../styles/forecast-details.css'
import dayjs from 'dayjs'
import advancedFormat from "dayjs/plugin/advancedFormat"

dayjs.extend(advancedFormat)

const ForecastDetails = (props) => {

    const getReadableDate = (date) => {
        return dayjs(date).format('MMMM Do, YYYY')
    }

    const { forecast } = props

    return (
            <div className='forecast-details'>
                <h2 className='date' data-testid='date-id'>{getReadableDate(forecast.date)}</h2>
                <span className='max-temperature' data-testid='max-temperature-id'>Max Temperature: {forecast.temperature.max}&#8451;</span>
                <span className='min-temperature' data-testid='min-temperature-id'>Min Temperature: {forecast.temperature.min}&#8451;</span>
                <span className='humidity' data-testid='humidity-id'>Humidity: {forecast.humidity}%</span>
                <span className='wind' data-testid='wind-id'>Wind: {forecast.wind.speed}mph</span>
            </div>
    )
}

ForecastDetails.propTypes = {
    forecast: PropTypes.shape({
        date: PropTypes.number,
        temperature: PropTypes.shape({
            max: PropTypes.number,
            min: PropTypes.number
          }).isRequired,
        wind: PropTypes.shape({
            speed: PropTypes.number,
            direction: PropTypes.string
          }).isRequired,
        humidity: PropTypes.number,
        description: PropTypes.string,
        icon: PropTypes.string
    }).isRequired
}

export default ForecastDetails