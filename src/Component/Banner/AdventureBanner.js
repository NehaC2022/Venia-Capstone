import React from 'react'
import Button from '../Button'

export default function AdventureBanner() {
    return (
        <section className='aem-Grid aem-Grid--12 aem-Grid--phone--12 container adventure-banner'>
            <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 adventure-banner-image'>
                <img src={require('../../images/banner-first.png')} alt='men on top of hill' aria-label='men on top of hill'/>
            </div>
            <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 adventure-banner-content'>
                <h1>Conquer your </h1>
                <h1 className='adventure_heading'> next adventure</h1>
                <p>Lorem Ipsum Dolor Tempor</p>
                <Button className="btn_device" text="SHOP Device" />
                <img src={require('../../images/map-pin.svg').default} alt='Location' aria-label='Location' className='location-icon'
                /> 
                {/* <div className='bar'></div> */}
            </div>
        </section>
    )
}
