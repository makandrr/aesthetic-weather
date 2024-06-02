import { useContext } from 'react'
import WeatherDataContext from '../../WeatherDataContext'

export default function LocationInfo({ className = '' }) {
    const weatherData = useContext(WeatherDataContext)

    return (
        <div className={`location-info ${className}`}>
            <h1 className="text-lg font-light">{weatherData.location.name}</h1>
        </div>
    )
}
