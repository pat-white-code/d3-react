import React from "react";
import * as d3 from "d3";
import Axis2 from "./Axis2";

class Scatterplot2 extends React.Component {
  xScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, this.props.width]);
  yScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([this.props.height, 0]);

  render() {
    const { x, y, data, height } = this.props;

    return (
      <g transform={`translate(${x}, ${y})`}>
        {data.map(([x, y], idx) => (
          <circle key={idx} cx={this.xScale(x)} cy={this.yScale(y)} r="5" />
        ))}
        <Axis2 x={0} y={0} scale={this.yScale} type="Left" />
        <Axis2 x={0} y={height} scale={this.xScale} type="Bottom" />
      </g>
    );
  }
}

export default Scatterplot2;
