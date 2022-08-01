import React from 'react'

export default function ShippingInfoDetails() {
   const info = JSON.parse(window.localStorage.getItem("formData"));
    return (

        <div className='shipping-content'>
            <div className='aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn aem-GridColumn--default--6'>
                    <h6>Shipping Information</h6>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--6 edit-icon'>
                    <img src={require('../../images/edit-2.1.svg').default} alt='Edit' /><p>Edit</p>
                </div>
            </div>
            <div className='aem-Grid aem-Grid--12 shipping-content-data'>
                <div className='aem-GridColumn aem-GridColumn--default--4'>
                    {/* <p>{info.email}</p> */}
                    {/* <p>{info.phoneNumber}</p> */}
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3'>
                    {/* <p>{info.firstName} {info.lastName}</p>
                    <p>{info.address1} {info.address2}</p>
                    <p>{info.city} {info.zip}</p> */}
                </div>
            </div>
        </div>
    )
}
