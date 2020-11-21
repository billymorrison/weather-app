import axios from 'axios';

const getData = async (locationFunction, forecastFunction) => {
    try{
        const response = await axios.get('https://mcr-codes-weather.herokuapp.com/forecast?city=Manchester')
        locationFunction(response.data.location)
        forecastFunction(response.data.forecasts)
    } catch (err) {
        console.log(err)
    }
}

export default getData