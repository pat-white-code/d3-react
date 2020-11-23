import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const Axis = ({x, y, scale, type, label}) => {
  const Text = styled.text`
    fill: black;
    font-family: sans-serif;
    font-size: 10px;
`;

  const labelPos = () => {

    switch (type) {
      case "Top":
        return { x: scale.range()[1] + 20, y: 0 };
      case "Right":
        return { x: 20, y: 0 };
      case "Bottom":
        return { x: scale.range()[1] + 25, y: 25 };
      case "Left":
        return { x: -25, y: 0 };
      default:
        return { x: -25, y: 0 };
    }
  }
  useEffect(()=>{
    d3.select(gRef.current).call(d3[`axis${type}`](scale));
  })

  const gRef = useRef();


  return(
    <g ref={gRef} transform={`translate(${x}, ${y})`}>
      <Text {...labelPos}>{label}</Text>
    </g>
  )
}

export default Axis;