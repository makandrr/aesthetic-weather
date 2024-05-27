import CitiesChart from '../molecules/CitiesChart/CitiesChart'
import { IoRainyOutline } from 'react-icons/io5'

function MainContent() {
    return (
        <div className="pt-14 pb-3 flex flex-col">
            <h1 className="leading-none px-14 uppercase font-semibold">
                <div>Aesthetic</div>
                <div>Weather</div>
            </h1>

            <section className="px-14 mt-11">
                <h1 className="font-light">Weather Forecast</h1>
                <p className="text-7xl mt-5">
                    Storm
                    <br />
                    with Heavy Rain
                </p>
            </section>

            <section className="px-14 mt-8">
                <p className="flex items-center gap-2">
                    <IoRainyOutline className="text-xl" />
                    USA, Friday,jan 3, 2023, 8:45AM
                </p>
                <p className="max-w-prose hyphens-auto mt-5">
                    Variable clouds with snow showers. High 11F. Winds E at 10
                    to 20 mph. Chance of snow 50%. Snow accumulations less than
                    one inch.
                </p>
            </section>

            <div className="mt-auto">
                <CitiesChart />
            </div>
        </div>
    )
}

export default MainContent
