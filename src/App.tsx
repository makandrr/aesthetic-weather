import { useContext, useEffect, useState } from 'react'
import './App.scss'
import MainContent from './components/organisms/MainContent'
import Sidebar from './components/organisms/Sidebar'
import WeatherDataContext from './WeatherDataContext'
import axios from 'axios'

export default function App() {
    const defaultWeatherData = useContext(WeatherDataContext)
    const [weather, setWeather] = useState(defaultWeatherData)
    const [cityName, setCityName] = useState(
        localStorage.getItem('cityName') || 'London'
    )
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await axios.get(
                    `http://api.weatherapi.com/v1/forecast.json?key=${
                        import.meta.env.VITE_API_KEY
                    }&q=${cityName}&days=7&aqi=no&alerts=no`
                )

                localStorage.setItem('cityName', cityName)
                setWeather((_) => data.data)
            } catch (e) {
                console.error(e.message)
            }
        }
        fetchData()
    }, [cityName])

    return (
        <WeatherDataContext.Provider value={weather}>
            <div className="app">
                <Sidebar onSearch={(query) => setCityName(query)} />
                <MainContent />
            </div>
        </WeatherDataContext.Provider>
    )
}
