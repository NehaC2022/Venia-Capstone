import React, { useEffect, useState } from 'react'
import Products from './Products';
import ProductFilter from './ProductFilter';

export default function ProductTeaser() {

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false)
  const [products, setProducts] = useState([]);
  // const [isSelected, setisSelected] = useState(false);
  const fetchData = () => {
    setloading(true);
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data);
        setloading(false);
        setProducts(data);

      })
    console.log(data)
  }



  useEffect(() => {
    fetchData()
  }, [])

  const [filter, setFilter] = useState();
  const sortProductLTH = () => {
    let sortedData = data?.sort((a, b) => (a.price > b.price ? 1 : -1));
    setFilter(sortedData);
  }
  const sortProductHTL = () => {
    let sortedData = data?.slice().sort((a, b) => b.price - a.price);
    setFilter(sortedData);
  }

  const sortProduct = (event) => {

    if (event.target.value === "lowtohigh") {
      sortProductLTH();
    } else if (event.target.value === "hightolow") {
      sortProductHTL();
    }
  }

  const filterProduct = (cat) => {
    const updatedList = products.filter((x) => x.category === cat.category);
    console.log("categories", updatedList);
    // setProducts(updatedList);
    setData(updatedList);
    console.log(filter);
  }

  return (
    <section className='product-teaser'>
      <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 container'>
        <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn aem-GridColumn--phone--hide'>
          <ProductFilter filterProduct={filterProduct}/>
        </div>

        <div className='aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12'>
          <div className='aem-GridColumn aem-GridColumn--phone--6'>
            <Products data={data} loading={loading} products={products} sortProduct={sortProduct}/>

          </div>
        </div>
      </div>
    </section>
  )
}


