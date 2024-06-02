import * as d3 from 'd3'
import { useEffect, useContext, useState } from 'react'
import './CitiesChart.scss'
import WeatherDataContext from '../../../WeatherDataContext'

function CitiesChart() {
    const dateFormat = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
    })
    const weatherData = useContext(WeatherDataContext)
    const [forecast, setForecast] = useState([])
    const maxHumidity = d3.max(forecast, (d) => d.avghumidity)
    const maxWind = d3.max(forecast, (d) => d.maxwind)
    useEffect(() => {
        const width = 1200
        const height = 100

        const svg = d3.select('#cc-chart')
        svg.attr('viewBox', `0 0 ${width} ${height}`).attr(
            'preserveAspectRatio',
            'xMinYMin meet'
        )
        const data = forecast.map((day, index) => [index + 1, day.avgtemp])
        const xMin = 1
        const xMax = 7
        const xScale = d3.scaleLinear([xMin, xMax], [80, width - 170])

        const yMin = d3.min(data.map((el) => el[1])) || 0
        const yMax = d3.max(data.map((el) => el[1])) || 1
        const yScale = d3.scaleLinear([yMin, yMax], [height - 7, 7])

        const middleY = (yMin + yMax) / 2
        data.push([9, middleY])
        data.unshift([-1, middleY])

        const lineData: [number, number][] = data.map((tuple) => [
            xScale(tuple[0]),
            yScale(tuple[1]),
        ])

        const line = d3.line().curve(d3.curveBasis)(lineData)
        svg.append('path')
            .attr('d', line)
            .attr('fill', 'none')
            .style('stroke', '#e7d286')
            .style('stroke-width', 3)

        return () => {
            svg.html('')
        }
    }, [forecast])
    useEffect(() => {
        if (weatherData.forecast) {
            setForecast(
                weatherData.forecast.forecastday.map((day) => ({
                    date: new Date(day.date),
                    maxtemp: day.day.maxtemp_c,
                    mintemp: day.day.mintemp_c,
                    avgtemp: day.day.avgtemp_c,
                    condition: day.day.condition.text,
                    avghumidity: day.day.avghumidity,
                    maxwind: day.day.maxwind_mph,
                }))
            )
        }

        // const data = [
        //     [1, 1],
        //     [2, 6],
        //     [3, 3],
        //     [4, 4],
        //     [5, 8],
        //     [6, 3],
        //     [7, 2],
        // ]
    }, [weatherData])
    return (
        <div className="cities-chart w-full overflow-x-auto py-3">
            <div className="cc-content">
                <div className="cc-top">
                    {forecast.map((day) => (
                        <div key={String(day.date)}>
                            <p className="date">
                                {dateFormat.format(day.date)}
                            </p>
                            <p className="high">high: {day.maxtemp} °C</p>
                            <p className="low">low: {day.mintemp} °C</p>
                        </div>
                    ))}
                </div>
                <svg id="cc-chart"></svg>
                <div className="cc-bottom">
                    {forecast.map((day) => (
                        <div key={String(day.date)}>
                            <p className="degree">{day.avgtemp}°</p>
                            <p className="city">{day.condition}</p>
                            <div className="lines">
                                <div
                                    style={{
                                        width:
                                            (day.avghumidity / maxHumidity) *
                                                100 +
                                            '%',
                                    }}
                                    className="line line1"
                                ></div>
                                <div
                                    style={{
                                        width:
                                            (day.maxwind / maxWind) * 100 + '%',
                                    }}
                                    className="line line2"
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CitiesChart
