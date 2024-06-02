import CitiesChart from '../molecules/CitiesChart/CitiesChart'
import { IoRainyOutline } from 'react-icons/io5'
import { useContext } from 'react'
import WeatherDataContext from '../../WeatherDataContext'

function MainContent() {
    const weatherData = useContext(WeatherDataContext)
    const now = new Date()
    const timeDateFormat = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })

    return (
        <div className="pt-14 pb-3 flex flex-col">
            <h1 className="leading-none px-14 uppercase font-semibold">
                <div>Aesthetic</div>
                <div>Weather</div>
            </h1>

            <section className="px-14 mt-11">
                <h1 className="font-light">Weather Forecast</h1>
                <p className="text-7xl mt-5">
                    {weatherData.current.condition.text}
                </p>
            </section>

            <section className="px-14 mt-8">
                <p className="flex items-center gap-2">
                    {/* <IoRainyOutline className="text-xl" /> */}
                    {weatherData.location.country}, {timeDateFormat.format(now)}
                </p>
                {/* <p className="max-w-prose hyphens-auto mt-5">
                    Variable clouds with snow showers. High 11F. Winds E at 10
                    to 20 mph. Chance of snow 50%. Snow accumulations less than
                    one inch.
                </p> */}
            </section>

            <div className="mt-auto">
                <CitiesChart />
            </div>
        </div>
    )
}

export default MainContent
