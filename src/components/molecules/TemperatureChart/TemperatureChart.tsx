import './TemperatureChart.scss'
import { useEffect } from 'react'
import * as d3 from 'd3'

export default function TemperatureChart({ className = '' }) {
    useEffect(() => {
        const width = 400
        const height = 274
        const leftPadding = 45
        const rightPadding = 0
        const topPadding = 1
        const bottomPadding = 35

        const graphLeftPadding = 75
        const graphRightPadding = 35
        const graphTopPadding = 70
        const graphBottomPadding = 55

        const svg = d3.select('#temp-chart')

        const data = {
            x: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23,
            ],
            y: [
                6, 6, 7, 8, 7, 8, 9, 10, 11, 14, 16, 15, 17, 16, 16, 17, 18, 16,
                15, 13, 13, 12, 13, 13,
            ],
        }

        svg.attr('viewBox', `0 0 ${width} ${height}`).attr(
            'preserveAspectRatio',
            'xMinYMin meet'
        )

        const minX = d3.min(data.x) || 0
        const maxX = d3.max(data.x) || 1
        const xScale = d3.scaleLinear(
            [minX, maxX],
            [graphLeftPadding, width - graphRightPadding]
        )

        const minY = d3.min(data.y) || 0
        const maxY = d3.max(data.y) || 1
        const yScale = d3.scaleLinear(
            [minY, maxY],
            [height - graphBottomPadding, graphTopPadding]
        )

        const xAxis = d3.axisTop(xScale).ticks(8)
        svg.append('g')
            .attr('id', 'gxAxis')
            .attr('transform', `translate(0, ${height + 15})`)
            .call(xAxis)

        const yAxis = d3.axisRight(yScale).ticks(4)
        svg.append('g').attr('id', 'gyAxis').call(yAxis)

        svg.append('rect')
            .attr('x', leftPadding)
            .attr('y', topPadding)
            .attr('width', width - rightPadding - leftPadding)
            .attr('height', height - topPadding - bottomPadding)
            .style('fill', 'none')
            .style('stroke', '#9a9ca1')
            .style('stroke-width', 3)
            .attr('rx', 17)

        const lineData: [number, number][] = []
        for (let i = 0; i < data.x.length; i++) {
            lineData.push([xScale(data.x[i]), yScale(data.y[i])])
        }
        const line = d3.line().curve(d3.curveCardinal)(lineData)
        svg.append('path')
            .attr('d', line)
            .attr('fill', 'none')
            .style('stroke', '#d1be7a')
            .style('stroke-width', 4)

        svg.append('text')
            .html('21°C')
            .attr('id', 'tempNumber')
            .attr('x', leftPadding + 15)
            .attr('y', topPadding + 55)

        return () => {
            svg.html('')
        }
    })
    return (
        <div className={`temperature-chart py-6 ${className}`}>
            <svg className="w-full aspect-tempChart" id="temp-chart"></svg>
        </div>
    )
}
