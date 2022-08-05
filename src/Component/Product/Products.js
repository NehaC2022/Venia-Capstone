import React, { useState } from 'react'
import ProductCard from './ProductCard';
import MobileSidebar from '../MobileFilter/MobileSidebar';


const Products = ({ data, loading, sortProduct,handleChange }) => {
  const [isclicked, setClicked] = useState(false);
  
  return (
    <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 product'>
      {
        isclicked && <MobileSidebar  handleChange={handleChange} onClose={() => {
          setClicked(false);
        }} />
      }
      {
        loading ? <h1 style={{ fontSize: "62px" }}>Loading...</h1> :
          <>
            <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 body-container product-details-bar'>
              <div className='aem-Grid aem-Grid--phone--12 mobile-content'>
                <div className='aem-GridColumn aem-GridColumn--phone--6'>
                  <ul>
                    <li onClick={() => { setClicked(true) }}><img src={require('../../images/sliders.svg').default} alt='slider' aria-label='slider' />Filter Results</li>
                  </ul>
                </div>
                <div className='aem-GridColumn aem-GridColumn--phone--6'>
                  <ul>
                    <li>
                      <img src={require('../../images/arrow-up.svg').default} alt='arrow-up' aria-label='arrow-up' />
                      <img src={require('../../images/arrow-down.svg').default} alt='arrow-udown' aria-label='arrow-down' />Sort Products
                    </li>
                  </ul>

                </div>
              </div>
              <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 product-results'>
                <p>{data.length}Results</p>
              </div>
              <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 aem-GridColumn--phone--hide'>
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