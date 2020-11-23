import React from 'react';
import styled from 'styled-components';

const Circle = styled.circle`
  fill: steelblue;
`

const DataPoint = props => {
  const {x, y} = props;
  return (
    <Circle cx={x} cy={y} />
  )
};

export default DataPoint;