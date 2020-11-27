import React, { useEffect, useState } from 'react';

import * as d3 from "d3"
import _ from "lodash"

import './App.css';
import './styles.css';
import "bootstrap/dist/css/bootstrap.css"

import Preloader from './components/PreLoader';
import { loadAllData } from './DataHandling';

const App = () => {
  const [techSalaries, setTechSalaries] = useState([]);
  const [ medianSalaries, setMedianSalaries] = useState([]);
  const [ countyNames, setCountyNames] = useState([]);

  const loadData = async() => {
    const data = await loadAllData();
    console.log(data);
    const {techSalaries, medianSalaries, countyNames} = data;
      
      setTechSalaries(techSalaries)
      setMedianSalaries(medianSalaries)
      setCountyNames(countyNames)
  }

  useEffect(()=>{
    loadData();
  }, [])

    return (
      <div>
        {techSalaries.length < 1 ? (
          <Preloader />
        ) : (
          <div className='app'>
            <h1>Loaded {techSalaries.length} salaries</h1>
          </div>
        )}
      </div>
    )
}

export default App;