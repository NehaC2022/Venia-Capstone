import React from 'react'
import { useState,useEffect } from 'react';

export default function Filter({ filterProduct }) {
  const [data, setData] = useState([]);
  const [isSelected, setisSelected] = useState(false);
  const getCategoryData = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data);

        })
    console.log(data)
}

useEffect(() => {
    getCategoryData()
}, []);


  return (

    <div className='filter'>
      <h6>Filters</h6>
      <div className='filter-category'>
        <p>Categories</p>
        {data.map((category) => {
          return (
            <>
              <div className='Attribute-first' >
                <input type="checkbox" id='chk1-label' aria-label="checkbox" onClick={() => {
                  setisSelected(!isSelected);
                  filterProduct({ category })
                }} />
                <label htmlFor="chk1-label">{category}</label><br />

              </div>


            </>
          )
        })}
      </div>
    </div>
  )
}
