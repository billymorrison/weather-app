import './styles/App.css';
import LocationDetails from './components/locationdetails'
import ForecastSummaries from './components/forecastsummaries'
import ForecastDetails from './components/forecastdetails'
import PropTypes from 'prop-types'
import { useState } from 'react'

function App(props) {
  const handleForecastSelection = (date) => {
    setSelectedDate(date);
  }

  const [selectedDate, setSelectedDate] = useState(props.forecasts[0].date)

  const selectedForecast = props.forecasts.find(forecast => forecast.date === selectedDate)

  return (
    <div className='forecast'>
      <LocationDetails 
        city = { props.location.city }
        country = { props.location.country }
      />
      <ForecastSummaries forecasts={ props.forecasts } onForecastSelect={ handleForecastSelection }/>
      <ForecastDetails forecast={ selectedForecast } />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string
  }).isRequired,
  forecasts: PropTypes.array.isRequired
}

export default App;


