import * as d3 from 'd3'
import { useEffect } from 'react'
import './CitiesChart.scss'

function CitiesChart() {
    useEffect(() => {
        const width = 1200
        const height = 100

        const svg = d3.select('#cc-chart')
        svg.attr('viewBox', `0 0 ${width} ${height}`).attr(
            'preserveAspectRatio',
            'xMinYMin meet'
        )
        const data = [
            [1, 1],
            [2, 6],
            [3, 3],
            [4, 4],
            [5, 8],
            [6, 3],
            [7, 2],
        ]

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
    }, [])
    return (
        <div className="cities-chart w-full overflow-x-auto py-3">
            <div className="cc-content">
                <div className="cc-top">
                    <div>
                        <p className="high">high: 23.0 °C</p>
                        <p className="low">low: 18.0 °C</p>
                    </div>
                    <div>
                        <p className="high">high: 23.0 °C</p>
                        <p className="low">low: 18.0 °C</p>
                    </div>
                    <div>
                        <p className="high">high: 23.0 °C</p>
                        <p className="low">low: 18.0 °C</p>
                    </div>
                    <div>
                        <p className="high">high: 23.0 °C</p>
                        <p className="low">low: 18.0 °C</p>
                    </div>
                    <div>
                        <p className="high">high: 23.0 °C</p>
                        <p className="low">low: 18.0 °C</p>
                    </div>
                    <div>
                        <p className="high">high: 23.0 °C</p>
                        <p className="low">low: 18.0 °C</p>
                    </div>
                    <div>
                        <p className="high">high: 23.0 °C</p>
                        <p className="low">low: 18.0 °C</p>
                    </div>
                </div>
                <svg id="cc-chart"></svg>
                <div className="cc-bottom">
                    <div>
                        <p className="degree">20°</p>
                        <p className="city">Washington D. C.</p>
                        <div className="lines">
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                        </div>
                    </div>
                    <div>
                        <p className="degree">20°</p>
                        <p className="city">Washington D. C.</p>
                        <div className="lines">
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                        </div>
                    </div>
                    <div>
                        <p className="degree">20°</p>
                        <p className="city">Washington D. C.</p>
                        <div className="lines">
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                        </div>
                    </div>
                    <div>
                        <p className="degree">20°</p>
                        <p className="city">Washington D. C.</p>
                        <div className="lines">
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                        </div>
                    </div>
                    <div>
                        <p className="degree">20°</p>
                        <p className="city">Washington D. C.</p>
                        <div className="lines">
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                        </div>
                    </div>
                    <div>
                        <p className="degree">20°</p>
                        <p className="city">Washington D. C.</p>
                        <div className="lines">
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                        </div>
                    </div>
                    <div>
                        <p className="degree">20°</p>
                        <p className="city">Washington D. C.</p>
                        <div className="lines">
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CitiesChart
