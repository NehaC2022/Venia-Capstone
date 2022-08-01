import React from 'react'

export default function ShippingMethodInfo() {
    const shippinginfo = JSON.parse(window.localStorage.getItem("shippingData"));
    console.log(shippinginfo);
    return (
        <div className='shipping-method-content'>
            <div className='aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn aem-GridColumn--default--6'>
                    <h6>Shipping Method</h6>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--6 edit-icon'>
                    <img src={require('../../images/edit-2.1.svg').default} alt='Edit' /><p>Edit</p>
                </div>
            </div>
            <div className='aem-Grid aem-Grid--12 shipping-method-data'>
                <div className='aem-GridColumn aem-GridColumn--default--3'>
                    <p>{shippinginfo}</p>
                </div>
            </div>
        </div>
    )
}
