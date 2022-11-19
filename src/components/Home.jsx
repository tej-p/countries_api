import React, { useEffect, useState } from "react";
import axios from "axios";
import { Country } from "./Country";
import "../App.css";

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => {
        setCountries(data.data);
        // console.log(data.data);
        // console.log("countries : ", countries);
      })
      .catch((error) => console.log(error.message));
  };

  const searchCountry = () => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`).then((data) => {
      console.log(data.data);
      setCountries(data.data);
    });
  };

  const searchRegion = (e) => {

    axios.get(`https://restcountries.com/v3.1/region/${e.target.value}`).then((data) => {
      console.log(data.data);
      setCountries(data.data);
    });
    
  };

  return (
    <>
      <div id="one" className="middle">
        <div className="search">
          <input
            type="text"
            className="input"
            placeholder="search for a country"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={() => {
              searchCountry();
            }}
          >
            SEARCH
          </button>
          <button onClick={() => getCountries()}>RESET</button>
        </div>
        <select id="region" onChange={searchRegion}>
      
          <option value="">Filter by region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div id="two" className="main">
        {countries.map((el, i) => (
          <Country key={i} data={el}></Country>
        ))}
      </div>
    </>
  );
};
