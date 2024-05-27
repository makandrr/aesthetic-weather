import * as d3 from 'd3'
import { useEffect } from 'react'

function LightCircles() {
    useEffect(() => {
        const width = 90
        const height = 30

        const svg = d3.select('#light-circles')
        svg.attr('viewBox', `0 0 ${width} ${height}`).attr(
            'preserveAspectRatio',
            'xMinYMin meet'
        )
        const data = [0, 0.25, 0.5, 0.75, 1]

        const colorScale = d3.scaleLinear([0, 1], ['#dd5454', '#feda82'])

        svg.selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('r', 10)
            .attr('cx', (_, i) => i * 13 + 10)
            .attr('cy', 15)
            .style('fill', (d) => colorScale(d))

        return () => {
            svg.html('')
        }
    }, [])
    return <svg className="w-28 aspect-lightCircles" id="light-circles"></svg>
}

export default LightCircles
