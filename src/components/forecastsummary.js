import PropTypes from 'prop-types'
import '../styles/forecast-summary.css'
import WeatherIcon from 'react-icons-weather'
import dayjs from 'dayjs'
import advancedFormat from "dayjs/plugin/advancedFormat"

dayjs.extend(advancedFormat)

const ForecastSummary = (props) => {

    const getReadableDate = (date) => {
        return dayjs(date).format('MMMM Do, YYYY')
    }

    return (
            <div className='forecast-summary'>
                <span className='date' data-testid='date-id'>{getReadableDate(props.date)}</span>
                <WeatherIcon name='owm' iconId={props.icon} data-testid='icon-image-id'/>
                <span className='max-temperature' data-testid='temperature-id'>{props.temperature}&#8451;</span>
                <span className='description' data-testid='description-id'>{props.description}</span>
                <button onClick={() => props.onSelect(props.date)}>More Details</button>
            </div>
    )
}

ForecastSummary.propTypes = {
    date: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

export default ForecastSummary



