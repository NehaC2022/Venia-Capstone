import React from 'react'
import { useEffect,useState} from 'react';

export default function Filter({filterProduct}) {
  // const [data, setData] = useState([]);
  const [isSelected, setisSelected] = useState(false);

  // const fetchData = () => {
  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       setData(data);
  //     })
  //   console.log(data)
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (

    <div className='filter'>
      <h6>Filters</h6>
      <div className='filter-category'>
      <p>Categories</p>
              <input type="checkbox" id='chk1-label' aria-label="checkbox" onClick={()=>{ setisSelected(!isSelected);
        filterProduct("jewelery")}} />
              <label htmlFor="chk1-label"> Jewellery</label><br />
              <input type="checkbox" id='chk2-label' aria-label="checkbox" onClick={()=>{ setisSelected(!isSelected);
        filterProduct("electronics")}}/>
              <label htmlFor="chk2-label">  Electronics</label><br />
              <input type="checkbox" id='chk3-label' aria-label="checkbox" onClick={()=>{ setisSelected(!isSelected);
        filterProduct("men's clothing")}}/>
              <label htmlFor='chk3-label'>  Men’s Clothing</label><br />
              <input type="checkbox" id='chk4-label' aria-label="checkbox" onClick={()=>{ setisSelected(!isSelected);
        filterProduct("women's clothing")}} />
              <label htmlFor='chk4-label'>Women’s Clothing</label><br />

      </div>
            </div>
  )
}
