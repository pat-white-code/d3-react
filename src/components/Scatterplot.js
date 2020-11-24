import React, { useMemo } from 'react';
import * as d3 from 'd3';
import Axis2 from './Axis2';


const Scatterplot = props => {
  const {width, height, data, dataPoint, x, y} = props;

  const xScale = useMemo(()=> 
    d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, width]), 
      [width]
  )

    const yScale = useMemo(()=>
      d3
        .scaleLinear()
        .domain([0, 100])
        .range([height, 0]), 
        [height])

  return (
    <g transform={`translate(${x}, ${y})`}>
        {data.map(([x,y]) => (
          dataPoint({x: xScale(x), y: yScale(y)})
        ))}
        <Axis2 x={0} y={0} type='Left' scale={yScale} />
        <Axis2 x={0} y={height} scale={xScale} type="Bottom" />
      </g>
  )
}

export default Scatterplot;
