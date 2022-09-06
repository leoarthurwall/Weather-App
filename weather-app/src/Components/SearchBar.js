import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { cityData } from "./cities";

function SearchBar({ placeholder, myData }) {
  const [citySearch, setCitySearch] = useState("");

  return (
    <div className="search-component-container">
      <div className="search-input-container">
        <input
          className="search-input"
          type="text"
          placeholder={placeholder}
          onChange={(event) => {
            setCitySearch(event.target.value);
          }}
        />
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>
      <div className="data-result">
        {cityData
          .filter((val) => {
            if (citySearch === "") {
              return null;
            } else if (
              val.city.toLowerCase().startsWith(citySearch.toLowerCase())
            ) {
              return val;
            }
          })
          .slice(0, 10)
          .map((item, key) => {
            return (
              <div className="data-result-city" key={key}>
                <p className="city-text">{item.city}</p>
              </div>
            );
          })}
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
