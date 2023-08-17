import { useState, useEffect } from 'react'
import { getWeatherIcon } from '../Utils/WeatherIcons'

export const Weather = () => {
   const [temp, setTemp] = useState(null)
   const [weather, setWeather] = useState(null)

   useEffect(() => {
      fetch(
         'http://api.weatherapi.com/v1/current.json?key=d6aca060cddc40b187b162030231708&q=Jaipur&aqi=no'
      )
         .then((response) => response.json())
         .then((results) => {
            setTemp(results.current.temp_c)
            setWeather(results.current.condition.text)
         })
   }, [])

   return (
      <span>
         {getWeatherIcon(weather)} Currently{' '}
         <strong>
            {temp !== null ? temp : <span className="gradient text" />} °C{' '}
         </strong>{' '}
         <small>
            ({weather !== null ? weather : <span className="gradient text" />})
         </small>{' '}
         in{' '}
         <strong>
            <a
               href="https://en.wikipedia.org/wiki/Jaipur"
               aria-label="city"
               target="_blank"
               rel="noopener noreferrer"
            >
               Jaipur
            </a>
         </strong>
      </span>
   )
}
