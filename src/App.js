import './App.css';
import './styles.css';
import Scatterplot from './components/Scatterplot';
import Scatterplot2 from './components/Scatterplot2';
import * as d3 from 'd3';;

const data = d3.range(100).map(() => [Math.floor(Math.random()*100), Math.floor(Math.random() * 100)])

function App() {
  console.log(data);
  return (
    <div>
      <svg width="800" height="800" id="svg">
        <Scatterplot y={50} x={50} width={300} height={300} data={data} />
      </svg>
      <svg width="800" height="800">
          <Scatterplot2 x={50} y={50} width={300} height={300} data={data} />
      </svg>
    </div>
  );
}

export default App;
