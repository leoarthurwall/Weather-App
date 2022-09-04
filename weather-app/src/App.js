import './App.css';
import React, { useState } from "react";
import axios from 'axios';

function App() {

// const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=39d58dd0e66853d63d1cdefbad6c7a37`

  return (


 
      <div className="app">
        {/* <input
          className="InputField"
          type="text"
          placeholder="Search by city..."
        /> */}
        <div className='container'>
          <div className='top'>
            <div className='location'>
              <p>London</p>
            </div>
            <div className='temp'>
              <h1>20°c</h1>
            </div>
            <div className='description'>
              <p>Clouds</p>
            </div>
          </div>
          <div className='bottom'>
            <div className='feels'>
              <p className='bold'>17°c</p>
              <p>Feels Like</p>
            </div>
            <div className='humidity'>
              <p className='bold'>25%</p>
              <p>Humidity</p>
            </div>
            <div className='wind'>
              <p className='bold'>15mph</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
     
  )
}

export default App;