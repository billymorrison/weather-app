import PropTypes from 'prop-types'
import '../styles/forecast-summary.css'

const ForecastSummary = (props) => {
    return (
            <div className='forecast-summary'>
                <span className='date' data-testid='date-id'>{props.date}</span>
                <span className='icon' data-testid='icon-id'>{props.icon}</span>
                <span className='max-temperature' data-testid='temperature-id'>{props.temperature}</span>
                <span className='description' data-testid='description-id'>{props.description}</span>
            </div>
    )
}

ForecastSummary.propTypes = {
    date: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
}

export default ForecastSummary



