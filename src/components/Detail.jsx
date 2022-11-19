import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

export const Detail = (props) => {
  const [data, setData] = useState([]);
  const { name } = useParams();
  const Navigate = useNavigate();
  console.log(data);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => {
        setData(res.data);
        // console.log('country : ',res);
      })
      .catch((e) => console.log(e.message));
  }, [name]);

  return (
    <div id="three" className="detail">
      <button onClick={() => Navigate("/")}>Back</button>
      {data.map((el, i) => (
        <div key={i} className="country-detail">
          <div className="img">
            <img src={el.flags.png} alt="country" />
          </div>
          <div id="right-div">
            <div>
              <h1>{el.name.common}</h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{marginRight:'50px'}}>
                <p>
                  <b>Native Name : </b>
                  <span>{el.name.common}</span>
                </p>

                <p>
                  <b>Population : </b>
                  <span>{el.population}</span>
                </p>
                <p>
                  <b>Region : </b>
                  <span>{el.region}</span>
                </p>
                <p>
                  <b>Sub-Region : </b>
                  <span>{el.subregion}</span>
                </p>
                <p>
                  <b>Capital : </b>
                  <span>{el.capital[0]}</span>
                </p>
              </div>
              <div>
                <p>
                  <b>Top Level Domain :</b>
                  <span>{el.tld[0]}</span>
                </p>
                <p>
                  <b>Languages :</b>
                  {Object.values(el.languages).map((e) => (
                    <span key={e} style={{ marginLeft: "10px" }}>
                      {e}
                    </span>
                  ))}{" "}
                </p>
                
              </div>
              
            </div>
            
            <div>
              {el?.borders?.length >= 1 && (
              <p>
                <b>Border Countries:</b>
                {el.borders.map((element, i) => {
                  return (
                    <span style={{ marginLeft: "50px" }}  key={element}>
                      {el.borders[i]}
                    </span>
                  );
                })}
              </p>
            )}
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};
