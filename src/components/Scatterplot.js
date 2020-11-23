import React, { PureComponent } from 'react';
import * as d3 from 'd3';
import Axis2 from './Axis2';


class Scatterplot extends PureComponent {
  state = {
    xScale: d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, this.props.width]),
    yScale: d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, this.props.height]),
    circleR: 5,
  }

  static getDerivedStateFromProps(props, state) {
    let {xScale, yScale } = state;

    xScale.range([0, props.width])
    yScale.range([0, props.height])

    return {...state, xScale, yScale}
  }

  render() {
    const {x, y, data, height, dataPoint} = this.props,
    {xScale, yScale, circleR} = this.state;

    return (
      <g transform={`translate(${x}, ${y})`}>
        {/* {data.map(([x,y], idx) => (
          <circle key={idx} cx={this.state.xScale(x)} cy={this.state.yScale(y)} r={3} />
        ))} */}
        {data.map(([x,y]) => (
          dataPoint({x: xScale(x), y: yScale(y), r:circleR})
        ))}
        <Axis2 x={0} y={0} type='Left' scale={yScale} />
        <Axis2 x={0} y={height} scale={xScale} type="Bottom" />
      </g>
    );
  }
}

export default Scatterplot;
