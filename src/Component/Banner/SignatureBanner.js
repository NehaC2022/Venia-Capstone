import React from 'react'
import Button from '../Button'

export default function SignatureBanner() {
    return (
        <div className='container'>
            <div className=' aem-Grid aem-Grid--12 signature-banner-container'>
                <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--7 aem-GridColumn--phone--12 signature-banner-content'>
                    <div className='aem-Grid aem-Grid--12 '>
                        <h1>Take off in the new Signature Legging</h1>
                        <strong>Lorem Ipsum Dolor Tempor</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                        <Button className="btn_collection" text="SHOP COLLECTION" />
                        <Button className="btn_shop" text="SHOP NOW" />
                        <div className='border-div'></div>
                    </div>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--5 aem-GridColumn--phone--12 banner-image'>
                    <img src={require('../../images/banner-sec.png')} alt='men with printed shirt' aria-label='men with printed shirt'/>
                </div>
            </div>
        </div>
    )
}
