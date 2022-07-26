import React from 'react'
import { useEffect,useState} from 'react';

export default function Filter() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setData(data);
      })
    console.log(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='filter'>
      <h6>Filters</h6>
      <div className='filter-category'>
      <p>Categories</p>
      {data.map((categories) => {
        return(
          <>
          <input type="checkbox" id="option1" name="" value="Option"/>
          <label htmlFor="option1">{categories}</label><br/>
        </>
        )
        
      
      })}
      </div>
    </div>
  )
}
