import React from 'react'
import ShippingInfo from '../shippingInformation/ShippingInfo';
import PricingSummary from '../PricingSummary/PricingSummary';
import SighInExpressCheckout from '../SignInExpressCheckout/SighInExpressCheckout';
import ShippingMethod from '../ShippingMethod/ShippingMethod';
import PaymentInfo from '../PaymentInfo/PaymentInfo';
import PlaceOrder from '../PlaceOrder/PlaceOrder';


export default function Checkout() {
    return (
        <section className='aem-Grid aem-Grid--12 container checkout'>
            <div className='aem-Grid aem-Grid--12 checkout-header'>
                <h1>Checkout</h1>
                <div className='checkout-bar'></div>
            </div>
            <div className='aem-Grid aem-Grid--12'>
                <h2>Guest Checkout</h2>
                <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 checkout-form-content'>
                    <ShippingInfo/>
                    <ShippingMethod/>
                    <PaymentInfo/>
                    <PlaceOrder/>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12'>
                    <SighInExpressCheckout/>
                    <PricingSummary/>
                </div>
            </div>
        </section>
    );
}
