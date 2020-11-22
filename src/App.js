import './styles/App.css';
import LocationDetails from './components/locationdetails'
import ForecastSummaries from './components/forecastsummaries'
import ForecastDetails from './components/forecastdetails'
import SearchForm from './components/searchform'
import { useEffect, useState } from 'react'
import getData from './services/get-data'

function App() {

  const [selectedDate, setSelectedDate] = useState(0)
  const [forecasts, setForecasts] = useState([])
  const [location, setLocation] = useState({
    city: '',
    country: ''
  })
  const [searchError, setSearchError] = useState()

  const setState = async (city) => {
    const response = await getData(setLocation, setForecasts, city)
    setSearchError(response)
  }

  useEffect(() => {
    setState(location.city)
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
      <SearchForm onSubmit={setState}/>
      { searchError === 404 && <span className='search-error'>City not found</span> }
      { searchError === 500 && <span className='search-error'>Internal server error, please contact site owner</span> }
      
      <ForecastSummaries forecasts={ forecasts } onForecastSelect={ handleForecastSelection }/>
      {
        selectedForecast && (<ForecastDetails forecast={selectedForecast} />)
      }
    </div>
  );
}

export default App;


