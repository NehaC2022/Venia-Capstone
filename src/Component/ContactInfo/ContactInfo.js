import React from 'react'
import FormInput from './FormInput'

export default function ContactInfo() {
    return (
        <>
            <div className='checkout-contactInfo'>
                <h5>Contact information</h5>
                <p>We’ll use these details to keep you informed on your delivery.</p>
                <form className="aem-Grid aem-Grid--12 contact_form">
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12" style={{ paddingRight: "16px" }}>
                        <FormInput type="email" label="Email" />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 " style={{ paddingleft: "16px" }}>
                        <FormInput type="number" label="Phone Number" />
                    </div>
                </form>
            </div>
        </>
    )
}
