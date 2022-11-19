import React from 'react';
import "../App.css";
import { useNavigate } from "react-router-dom"

export const Country = (data) => {

    const Navigate = useNavigate();

    // console.log(data.data)
    
  return (
    <div className='country' onClick={()=>Navigate(`/detail/${data.data.name.official}`)}>
        <img src={data.data.flags.png} alt="" />
        <div>
            <h2> {data.data.name.common}</h2>
            <p><b>Population : </b>{data.data.population}</p>
            <p><b>Region : </b>{data.data.region}</p>
            <p><b>Capital : </b>{data.data.capital}</p>
        </div>

    </div>
  )
}
