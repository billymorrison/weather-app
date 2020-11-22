import axios from 'axios';

const getData = async (locationFunction, forecastFunction, city) => {
    try{
        const response = await axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
        locationFunction(response.data.location)
        forecastFunction(response.data.forecasts)
    } catch (err) {
        return err.response.status 
    }
}

export default getData