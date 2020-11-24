import React, { useEffect, useState } from 'react';
import './App.css';
import './styles.css';
import Scatterplot from './components/Scatterplot';
import * as d3 from 'd3';
import DataPoint from './components/DataPoint';

const App = () => {
  const [dimensions, setDimensions] = useState({height: 300, width: 300})
  const [data, setData] = useState([]);

  useEffect(()=> {
    setData(d3.range(100).map(() => [Math.floor(Math.random()*100), Math.floor(Math.random() * 100)]));
  }, [])

  const handleClick = () => {
    setDimensions({
      width: dimensions.width * .8,
      height: dimensions.height * .8,
    })
  }

  return(
    <div>
      <svg width="800" height="800" id="svg" onClick={handleClick}>
        <Scatterplot 
          y={50} 
          x={50} 
          width={dimensions.width}
          height={dimensions.height}
          data={data} 
          dataPoint = {({x, y}) => <DataPoint x={x} y={y} />}
          />
      </svg>
    </div>
  )
}

export default App;