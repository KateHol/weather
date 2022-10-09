import React from 'react';
import Weather from './Weather';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>Weather App</h1>
      <Weather />

   <footer>This project was coded by Kate Holota and is{" "}
    <a href="https://github.com/KateHol/weather" 
    target="_blank"
    rel='noreferrer'>
       open-sourced on GitHub
      </a> and
      <a href="https://helpful-caramel-ab529a.netlify.app"> hosted on Netlify</a>
    </footer> 
    </div>
    </div>
  );
}

export default App;
