import './App.css'
import Navbar from './components/navbar'
import SearchBar from './components/searchBar'
import TempBox from './components/tempBox'
import Forecast from './components/forecast'
import Chart from './components/chart'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from './components/footer'
import Skeleton from '@mui/material/Skeleton'
import SunState from './components/sun'
import AirQuality from './components/airQuality'

function App() {
  //city weather data
  let [cityData, setCityData] = useState(null);
  //passing the empty obj {} will cause error
  //empty cityDat will be passed to the components and they try to deconstruct it and caught the error of undefined
  // so set null, so nothing will be passed and component will not render

  //forecast days
  let [days, setDays] = useState(5)

  //store current searched city(delhi default)
  let [currentCity, setCurrentCity] = useState({ latitude: 28.667, longitude: 77.217 })

  //loading the skeleton 
  const [loading, setLoading] = useState(true);

  //weatherapi.com keys and base url
  const weatherKey = import.meta.env.VITE_WEATHER_KEY;
  const weatherUrl = import.meta.env.VITE_WEATHER_URL;

  //get weather data using lat and lon
  async function weatherData(city){
    //load skeleton on every re fetch data
    setLoading(true);
    //save the city on every search
    setCurrentCity(city)
    let response = await axios.get(`${weatherUrl}/forecast.json?key=${weatherKey}&q=${city.latitude},${city.longitude}&days=${days}&alerts=yes&aqi=yes`)
    setCityData(response.data)
    setLoading(false);
    console.log(response)
  }

  //get new weatherData whenever the days changes
  useEffect(() => {
    weatherData(currentCity);
  }, [days]);



  return (
    <div className='flex flex-col gap-8 min-h-screen'>
      <Navbar />
      <SearchBar onSearch={weatherData} />

      {loading ? (
        <Skeleton variant="rounded" className='!w-[90%] md:!w-2xl lg:!w-5xl !min-h-64 md:!h-80 lg:!h-96 !mx-auto !rounded-3xl' />
      ) : (
        cityData && <TempBox location={cityData.location} current={cityData.current} />
      )}
      {loading ? (
        <Skeleton variant="rounded" className='!w-[90%] md:!w-2xl lg:!w-5xl !h-24 !mx-auto !rounded-2xl' />
      ) : (
        cityData && <SunState astro={cityData.forecast.forecastday[0].astro} />
      )}
      {loading ? (
        <Skeleton variant="rounded" className='!w-[90%] md:!w-2xl lg:!w-5xl !h-48 md:!h-56 !mx-auto !rounded-2xl' />
      ) : (
        cityData && <Forecast forecastData={cityData.forecast} daysfunc={setDays} days={days} />
      )}
      {loading ? (
        <Skeleton variant="rounded" className='!w-[90%] md:!w-2xl lg:!w-5xl !h-48 md:!h-56 !mx-auto !rounded-2xl' />
      ) : (
        cityData && <Chart forecastHourly={cityData.forecast.forecastday[0].hour} />
      )}
      {loading ? (
        <Skeleton variant="rounded" className='!w-[90%] md:!w-2xl lg:!w-5xl !h-24 !mx-auto !rounded-2xl' />
      ) : (
        cityData && <AirQuality airQuality={cityData.current.air_quality} />
      )}
      <Footer />
    </div>
  )
}

export default App
