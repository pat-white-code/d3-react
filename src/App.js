import './App.css';
import './styles.css';
import Scatterplot from './components/Scatterplot';
import * as d3 from 'd3';;

const data = d3.range(100).map(d => [Math.floor(Math.random()*100), Math.floor(Math.random() * 100)])

function App() {
  console.log(data);
  return (
    <svg width="800" height="400" id="svg">
      <Scatterplot y={0} x={0} data={data} />
    </svg>
  );
}

export default App;
