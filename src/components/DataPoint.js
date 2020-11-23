import React from 'react';
import styled from 'styled-components';

const Circle = styled.circle`
  fill: steelblue;
  stroke: steelblue;
  stroke-width: 2px;
  fill-opacity: 0.5;
  &:hover{
    fill: red;
    stroke: red;
  }
`

const DataPoint = props => {
  const {x, y} = props;
  return (
    <Circle cx={x} cy={y} r={5} />
  )
};

export default DataPoint;