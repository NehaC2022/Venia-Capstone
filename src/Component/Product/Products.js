import React from 'react'
import ProductCard from './ProductCard';


const Products = ({data, products,loading,sortProduct}) => {
  // const [data, setData] = useState([]);
  // const [loading, setloading] = useState(false)
  // const [products, setProducts] = useState([]);
  // const [isSelected, setisSelected] = useState(false);
  // const fetchData = () => {
  //   setloading(true);
  //   fetch("https://fakestoreapi.com/products")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setData(data);
  //       setloading(false);
  //       setProducts(data);

  //     })
  //   console.log(data)
  // }



  // useEffect(() => {
  //   fetchData()
  // }, [])

  // const [filter, setFilter] = useState();
  // const sortProductLTH = () => {
  //   let sortedData = data?.sort((a, b) => (a.price > b.price ? 1 : -1));
  //   setFilter(sortedData);
  // }
  // const sortProductHTL = () => {
  //   let sortedData = data?.slice().sort((a, b) => b.price - a.price);
  //   setFilter(sortedData);
  // }

  // const sortProduct = (event) => {

  //   if (event.target.value === "lowtohigh") {
  //     sortProductLTH();
  //   } else if (event.target.value === "hightolow") {
  //     sortProductHTL();
  //   }
  // }

  // const filterProduct = (cat) => {
  //   const updatedList = data.filter((x) => x.category === cat);
  //   console.log("categories", updatedList);
  //   // setProducts(updatedList);
  //   setData(updatedList);
  //   console.log(filter);
  // }

  return (


    <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 product'>
      {
        loading ? <h1 style={{ fontSize: "62px" }}>Loading...</h1> :
          <>
            {/* <div className='Attribute-first'>
              <h4>Categories</h4>
              <input type="checkbox" id='chk1-label' aria-label="checkbox" onClick={()=>{ setisSelected(!isSelected);
        filterProduct("jewelery");}} />
              <label htmlFor="chk1-label"> Jewellery</label><br />
              <input type="checkbox" aria-label="checkbox" onClick={() => filterProduct("electronics")} />
              <label >  Electronics</label><br />
              <input type="checkbox" aria-label="checkbox" onClick={() => filterProduct("men's clothing")} />
              <label >  Men’s Clothing</label><br />
              <input type="checkbox" aria-label="checkbox" onClick={() => filterProduct("women's clothing")} />
              <label >Women’s Clothing</label><br />

            </div> */}

            <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 body-container product-details-bar'>
              <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                <p>{data.length}Results</p>
              </div>
              <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                <select onChange={(e) => sortProduct(e)}>
                  <option>Sort by Latest</option>
                  <option value="lowtohigh">Low to High</option>
                  <option value="hightolow">High to Low</option>

                </select>
              </div>
            </div>
            <ProductCard data={data} loading={loading} />
          </>}


    </div>
  )
}

export default Products