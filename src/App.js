import React, { useEffect, useState } from 'react';
import './App.css';
import './styles.css';
import Preloader from './components/PreLoader';

const App = () => {
  const [data, setData] = useState([]);

    return (
      <div>
        {data.length > 1 ? (
          <Preloader />
        ) : (
          <div className='app'>
            <h1> this is your app</h1>
          </div>
        )}
      </div>
    )
}

export default App;