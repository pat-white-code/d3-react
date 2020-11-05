import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Axis = props => {
  const {y, align } = props;
  const gRef = React.createRef();

  useEffect(()=>{
    d3render()
  })

  const alignAxis = (scale, alignAngle = align) => {
    switch(align) {
      case 'bottom':
        return d3.axisBottom();
      case 'left':
        return d3.axisLeft(scale);
      default: 
        return d3.axisBottom(scale);
    }
  }

  const d3render = () => {
    const scale = d3.scaleLinear().domain([0, 10]).range([0, 300])
    // const axis = d3.axisLeft(scale);
    const axis = alignAxis(scale);
    d3.select(gRef.current).call(axis);
  }
  return ( 
  <g  transform={`translate(30, 30)`} ref={gRef} />
  );
}

export default Axis;