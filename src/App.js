import React, { Component } from 'react';
import './App.css';
import './styles.css';
import Scatterplot from './components/Scatterplot';
import * as d3 from 'd3';
import DataPoint from './components/DataPoint';


class App extends Component {
  state = {
    width: 300,
    height: 300,
    data: d3.range(100).map(() => [Math.floor(Math.random()*100), Math.floor(Math.random() * 100)])
  }
  handleClick = () => {
    this.setState({
      width: this.state.width * .8,
      height: this.state.height * .8,
    })
  }
  render() {
    return (
      <div>
        <svg width="800" height="800" id="svg" onClick={this.handleClick}>
          <Scatterplot 
            y={50} 
            x={50} 
            width={this.state.width}
            height={this.state.height}
            data={this.state.data} 
            dataPoint = {({x, y}) => <DataPoint x={x} y={y} />}
            
            />
        </svg>
      </div>
    );
  }
}

export default App;
