import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=39d58dd0e66853d63d1cdefbad6c7a37`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };


  return (
    <div className="app">
      {/* <div className="search">
        <input
          className="input-original"
          value={location}
          type="text"
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location..."
        />
      </div> */}
      <SearchBar placeholder="Enter a City..." />

      <div className="container">
        <div className="top">
          <div className="location">
            {data.sys ? (
              <p>
                {data.name}, {data.sys.country}
              </p>
            ) : null}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°c</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        {/* bottom only renders when data.name is defined */}
        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°c</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.main ? (
                <p className="bold">{data.wind.speed.toFixed()}mph</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


/*
PLAN - connect search bar to weather api and render on screen
- click a city from bar & fetch data fro that city
  - on click function that fetches data when city is clicked
    - 
- display city data on screen

*/