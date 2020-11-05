import * as d3 from 'd3';
import D3blackbox from './d3BlackBox';



function d3Render(props) {
  // const align = props.align;

  // const alignAxis = (scale, alignAngle = align) => {
  //   switch(align) {
  //     case 'bottom':
  //       return d3.axisBottom(scale);
  //     case 'left':
  //       return d3.axisLeft(scale);
  //     default: 
  //       return d3.axisBottom(scale);
  //   }
  // }
  console.log(props);
  const scale = d3.scaleLinear().domain([0, 10]).range([0, 300])
  const axis = d3.axisBottom(scale);
  // const axis = alignAxis(scale);
  d3.select(this.anchor.current).call(axis);
}

const AxisConsumer = D3blackbox(d3Render);

export default AxisConsumer;

// import D3blackbox from "./d3BlackBox";
// import * as d3 from "d3";

// const AxisConsumer = D3blackbox(function() {
//   const scale = d3
//     .scaleLinear()
//     .domain([0, 10])
//     .range([0, 200]);
//   const axis = d3.axisBottom(scale);

//   d3.select(this.anchor.current).call(axis);
// });

// export default AxisConsumer;
