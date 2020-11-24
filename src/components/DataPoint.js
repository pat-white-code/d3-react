import React, { Component } from 'react';
import styled from 'styled-components';

const Circle = styled.circle`
  fill: steelblue;
  stroke: steelblue;
  stroke-width: 2px;
  fill-opacity: 0.5;
  transition: 500ms;
  &:hover{
    fill: red;
    stroke: red;
    cursor: pointer;
  }
`

class DataPoint extends Component {
  state = {
    radius: 5
  };

  handleMouseEnter = () => {
    this.setState({
      radius: 10
    })
  }

  handleMouseLeave = () => {
    this.setState({
      radius: 5
    })
  }

  render() {
    const {x, y} = this.props;
    return (
      <Circle onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} cx={x} cy={y} r={this.state.radius} />
    );
  }
}

export default DataPoint;