import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { cityData } from "./cityData.js";

function SearchBar({ placeholder, myData }) {
  const [data, setData] = useState({});
  const [citySearch, setCitySearch] = useState("");

  const clearInput = () => {
    setCitySearch("");
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&appid=39d58dd0e66853d63d1cdefbad6c7a37`;

  const handleCityClick = (searchData) => {
    console.log("city clicked");
    console.log(searchData.target.firstChild.textContent);
    setCitySearch(searchData.target.firstChild.textContent);
    console.log(setCitySearch);

    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="search-component-container">
      <div className="search-input-container">
        <input
          className="search-input"
          type="text"
          value={citySearch}
          placeholder={placeholder}
          onChange={(event) => {
            setCitySearch(event.target.value);
          }}
        />
        <div className="search-icon">
          {citySearch.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon className="close-icon" onClick={clearInput} />
          )}
        </div>
      </div>
      {citySearch.length !== 0 && (
        <div className="data-result">
          {cityData
            .filter((val) => {
              if (citySearch === "") {
                return null;
              } else if (
                val.name.toLowerCase().startsWith(citySearch.toLowerCase())
              ) {
                return val;
              }
            })
            .slice(0, 10)
            .map((item, key) => {
              return (
                <div
                  className="data-result-city"
                  key={key}
                  onClick={handleCityClick}
                >
                  <p className="city-text">
                    {item.name}, {item.country}
                  </p>
                </div>
              );
            })}
        </div>
      )}
      {/* APP.CSS */}
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
            {data.main ? <p className="bold">{data.main.pressure} mb</p> : null}
              <p>Pressure</p>
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
        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.temp_max.toFixed()}°c</p>
              ) : null}
              <p>High</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="bold">{data.main.temp_min.toFixed()}°c</p>
              ) : null}
              <p>Low</p>
            </div>
            <div className="wind">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°c</p>
              ) : null}
              <p>Feels Like</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;

/*Plan
- make search bar - DONE
- display city options when searching for city
- display top 10 cities
- give on click option & onkey enter option


*/
