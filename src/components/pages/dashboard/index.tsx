import React, { useState } from 'react'
import { forecastI, weatherI } from '../../../interfaces/forecast/forecast.interface';
import ForecastTable from '../../app/forecastTable'
import Search from '../../app/search'

const Dashboard = () => {
    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=1ab6cf3a1ca744dbb95b5780800470ef&lang=en';
    let cityUrl = '&q='

    let urlForeCast = 'https://api.openweathermap.org/data/2.5/forecast?appid=1ab6cf3a1ca744dbb95b5780800470ef&lang=en';

    const [weather, setWeather] = useState<weatherI>()

    const [forecast, setForecast] = useState<forecastI>()

    const [loading, setLoading] = useState<boolean>(false)

    const [show, setShow] = useState<boolean>(false)

    const [location, setLocation] = useState<string>('')

    const getLocation = async (loc: string) => {
        setLoading(true)
        setLocation(loc)

        urlWeather = urlWeather + cityUrl + loc

        await fetch(urlWeather).then((res) => {
            if (!res.ok) throw { res }
            return res.json();
        }).then((weatherData) => {
            // console.log(weatherData);

            setWeather(weatherData);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
            setShow(false)
        })

        //Forecast

        urlForeCast = urlForeCast + cityUrl + loc

        await fetch(urlForeCast).then((res) => {
            if (!res.ok) throw { res }
            return res.json();
        }).then((forecastData) => {
            // console.log(forecastData);
            setForecast(forecastData);

            setLoading(false)
            setShow(true)

        }).catch((err) => {
            console.log(err);
            setLoading(false);
            setShow(false)
        })

    }

    return (
        <>
            <div className="hero" data-bg-image="images/banner.png" style={{ backgroundImage: 'url(/images/banner.png)' }}>
                <Search getLocation={getLocation} />
            </div>
            <ForecastTable weather={weather} forecast={forecast} />
        </>
    )
}

export default Dashboard