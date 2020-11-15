import './styles/App.css';
import LocationDetails from './components/locationdetails'
import ForecastSummaries from './components/forecastsummaries'
import PropTypes from 'prop-types'

function App(props) {
  return (
    <div className='forecast'>
      <LocationDetails 
        city = { props.location.city }
        country = { props.location.country }
      />
      <ForecastSummaries forecasts={ props.forecasts }/>
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


