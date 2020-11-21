import './styles/App.css';
import LocationDetails from './components/locationdetails'
import ForecastSummaries from './components/forecastsummaries'
import ForecastDetails from './components/forecastdetails'
import { useEffect, useState } from 'react'
import getData from './services/get-data'

function App() {

  const [selectedDate, setSelectedDate] = useState(0)
  const [forecasts, setForecasts] = useState([])
  const [location, setLocation] = useState({
    city: '',
    country: ''
  })

  useEffect(() => {
    getData(setLocation, setForecasts)
  }, [])

  const selectedForecast = forecasts && forecasts.find(forecast => forecast.date === selectedDate)
  const handleForecastSelection = (date) => {
    setSelectedDate(date);
  }

  return (
    <div className='forecast'>
      <LocationDetails 
        city = { location.city }
        country = { location.country }
      />
      <ForecastSummaries forecasts={ forecasts } onForecastSelect={ handleForecastSelection }/>
      {
        selectedForecast && (<ForecastDetails forecast={selectedForecast} />)
      }
    </div>
  );
}

export default App;


