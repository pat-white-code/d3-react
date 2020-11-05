import logo from './logo.svg';
import './App.css';
import Axis from './components/Axis';
import AxisConsumer from './components/AxisConsumer';

function App() {
  return (
    <svg width="800" height="400" id="svg">
      <Axis align="bottom" />
      <AxisConsumer x={20} y={50} align="bottom" />
    </svg>
  );
}

export default App;
