import React, { Component } from 'react';
import * as d3 from 'd3';


class Scatterplot extends Component {
  render() {
    const {x, y, data} = this.props;
    return (
      <g transform={`translate(${x}, ${y})`}>
        {data.map((d, idx) => (
          <circle key={idx} cx={d[0]} cy={d[1]} r={3} />
        ))}
      </g>
    );
  }
}

export default Scatterplot;