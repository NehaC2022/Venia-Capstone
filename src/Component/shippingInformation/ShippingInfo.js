import React, { useState } from 'react'
import Button from '../Button'
import { Accordian } from '../Accordian';
import { NavLink } from "react-router-dom";

export default function ShippingInfo({shippingInfoAccor}) {
    const [formData, setFormData] = useState({
        email: "q_farhan@gmail.com",
        phoneNumber: "+1 (555) 229-3367 ",
        firstName: " Qadim",
        lastName: "Farhan  ",
        address1: " 1098 Wapello Street Altadena, California 91001 United States",
        address2: " ",
        city: " California",
        zip: "91001 ",

    });
    const inputData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }
    const submitAction = (e) => {
        e.preventDefault();
        window.localStorage.setItem("formData", JSON.stringify(formData));
        shippingInfoAccor();
        setFormData({
            email: " ",
            phoneNumber: " ",
            firstName: " ",
            lastName: " ",
            address1: " ",
            address2: " ",
            city: " ",
            zip: " ",
        })
        console.log(formData);
    }
    return (
        <> 
            <div className='checkout-contactInfo'>
                <h5>Contact information</h5>
                <p>We’ll use these details to keep you informed on your delivery.</p>
                <form className="aem-Grid aem-Grid--12 contact_form">
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12" style={{ paddingRight: "16px" }}>
                        <label htmlFor="Email">Email</label><br />
                        <input type="text" id="email" name="email" placeholder="" value={formData.email} onChange={inputData} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 " style={{ paddingleft: "16px" }}>
                        <label htmlFor="number">Phone Number</label><br />
                        <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={inputData} />
                    </div>
                </form>
            </div>
            <div className="shipping-container">
                <h5>1. Shipping Information</h5>
                <form className="shipping-content">
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12" style={{ paddingRight: "16px" }}>
                            <label>Country<br />
                                <select name="country" id="country" aria-label="Selectcountry">
                                    <option value="united state">United States</option>
                                    <option value="india">India</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12" style={{ paddingRight: "16px" }}>
                            <label htmlFor="firstName" className='label-form'>First Name</label><br />
                            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={inputData} />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 " style={{ paddingleft: "16px" }}>
                            <label htmlFor="lastName" className='label-form'>Last Name</label><br />
                            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={inputData} />
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12" style={{ paddingRight: "16px" }}>
                            <label htmlFor="address1" className='label-form'>Street Address</label><br />
                            <input type="text" id="address1" name="address1" value={formData.address1} onChange={inputData} />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 " style={{ paddingleft: "16px" }}>
                            <label htmlFor="address2" className='label-form'>Street Address 2</label><br />
                            <input type="text" id="address2" name="address2" value={formData.address2} onChange={inputData} />
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12" style={{ paddingRight: "16px" }}>
                            <label htmlFor="city" className='label-form'>City</label><br />
                            <input type="text" id="C\city" name="city" value={formData.city} onChange={inputData} />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12 " style={{ paddingRight: "16px" }}>
                            <label>State<br />
                                <select className="state-select" aria-label="selectstate">
                                    <option value="DEFAULT">California</option>
                                    <option value="India">Maharastra</option>
                                    <option value="India">Gujrat</option>
                                </select>
                            </label>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--2 aem-GridColumn--phone--12 " style={{ paddingleft: "16px" }}>
                            <label htmlFor="zip" className='label-form'>ZIP</label><br />
                            <input type="text" id="zip" name="zip" placeholder="91001" className='zip' value={formData.zip} onChange={inputData} />
                        </div>
                    </div>
                    <NavLink to='/shippingMethod'>
                    <div className="shipping-method">
                        <Button text="CONTINUE TO SHIPPING METHOD" className="shipping-button" onClick={submitAction} />
                        <Button text="CONTINUE" className="mob-shipping-button" onClick={submitAction} />
                    </div>
                    </NavLink>
                </form>
                <Accordian text="2. Shipping Method" className="accordian-content"/>
                <Accordian text="3. Payment Information" className="accordian-content mr-bottom"/>
            </div>
        </>
    )
}
