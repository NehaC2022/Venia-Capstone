import React from 'react'

export default function PaymentInfoDetails() {
    const paymentInfo = JSON.parse(window.localStorage.getItem("paymentData"));
    console.log( paymentInfo);

    return (
        <div className='payment-info-content'>
            <div className='aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn aem-GridColumn--default--6'>
                    <h6>Payment Information</h6>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--6 edit-icon'>
                    <img src={require('../../images/edit-2.1.svg').default} alt='Edit' aria-label='' /><p>Edit</p>
                </div>
            </div>
            <div className='payment-data'>
                <p>Credit Card</p>
                <p>Visa ending in 4567</p>
            </div>
        </div>
    )
}
