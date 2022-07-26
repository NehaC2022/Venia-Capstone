import React from 'react';
import image from '../../images/banner1.png'

export default function HeaderBanner() {
  return (
    <section className='aem-Grid aem-Grid--12 aem-Grid--phone--12 main-banner'>
        <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 header-banner-content'>
            <h1>Men’s</h1>
            <h1 className='heading2'> Outerwear</h1>
            <div className='bar'></div>
        </div>
        <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 header-banner-image'>
            <img src={image} alt='Beans Man Image' className='hero-banner-image'/>
        </div>
    </section>
  )
}
