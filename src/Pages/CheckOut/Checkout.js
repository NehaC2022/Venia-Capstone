import React, {useState} from 'react'
import ShippingInfo from '../../Component/shippingInformation/ShippingInfo';
import PricingSummary from '../../Component/PricingSummary/PricingSummary';
import SighInExpressCheckout from '../../Component/SignInExpressCheckout/SighInExpressCheckout';
import ShippingMethod from '../../Component/ShippingMethod/ShippingMethod';
import PaymentInfo from '../../Component/PaymentInfo/PaymentInfo';
import PlaceOrder from '../../Component/PlaceOrder/PlaceOrder';


export default function Checkout() {
    const [isShippingInfoActive, setIsShippingInfoActive]= useState(true);
    const [isShippingMethodActive, setIsShippingMethodActive]= useState(false); 
    const [isPaymentActive, setIsPaymentActive]= useState(false); 
    const [orderDetails, setOrderDetails] =useState(false);

    const shippingInfoAccor=()=>{
        setIsShippingInfoActive(!isShippingInfoActive);
        setIsShippingMethodActive(!isShippingMethodActive);
    }
    const shippingMethodAccor=()=>{
        setIsShippingMethodActive(!isShippingMethodActive);
        setIsPaymentActive(!isPaymentActive);
    }
    const paymentAccor=()=>{
        setIsPaymentActive(!isPaymentActive);
        setOrderDetails(!orderDetails)
    }
    
    return (
        <section className='aem-Grid aem-Grid--12 container checkout'>
            <div className='aem-Grid aem-Grid--12 checkout-header'>
                <h1>Checkout</h1>
                <div className='checkout-bar'></div>
            </div>
            <div className='aem-Grid aem-Grid--12'>
                <h2>Guest Checkout</h2>
                <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 checkout-form-content'>
                    {isShippingInfoActive &&  <ShippingInfo shippingInfoAccor={shippingInfoAccor}/>}
                    {isShippingMethodActive && <ShippingMethod shippingMethodAccor={shippingMethodAccor}/>}
                    {isPaymentActive && <PaymentInfo paymentAccor={paymentAccor}/>}
                    {orderDetails && <PlaceOrder/>}
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12'>
                    <SighInExpressCheckout/>
                    <PricingSummary/>
                </div>
            </div>
        </section>
    );
}
