import { PiPlusMinusThin } from 'react-icons/pi'
import { useContext } from 'react'
import WeatherDataContext from '../../WeatherDataContext'

export default function SidebarPrimaryInfo({ className = '' }) {
    const weatherData = useContext(WeatherDataContext)
    return (
        <div className={`sidebar-primary-info ${className}`}>
            <div className="text-7xl font-extralight text-center flex justify-center items-center gap-1 leading-none">
                {weatherData.current.temp_c}&deg;
                <div className="flex items-center text-6xl">
                    <PiPlusMinusThin />
                </div>
                {Math.abs(
                    Math.round(
                        weatherData.current.temp_c -
                            weatherData.current.feelslike_c
                    )
                )}
            </div>

            <div className="flex justify-between font-extralight items-end">
                <div className="text-4xl leading-none">
                    {weatherData.current.humidity}%
                </div>
                <div className="text-sm">
                    Wind: {weatherData.current.wind_dir}{' '}
                    {weatherData.current.wind_mph}mph
                </div>
            </div>
        </div>
    )
}
