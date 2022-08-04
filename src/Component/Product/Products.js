import React from 'react'
import ProductCard from './ProductCard';


const Products = ({data, products,loading,sortProduct}) => {
  return (
    <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 product'>
      {
        loading ? <h1 style={{ fontSize: "62px" }}>Loading...</h1> :
          <>
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
            <ProductCard key={data.id} data={data} loading={loading} />
          </>}


    </div>
  )
}

export default Products