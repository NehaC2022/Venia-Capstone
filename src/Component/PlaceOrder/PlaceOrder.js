import React from 'react'
import ShippingInfoDetails from '../ShippingInfoDetails/ShippingInfoDetails'
import ShippingMethodInfo from '../ShippingMethodInfo/ShippingMethodInfo'
import OrderProduct from '../OrderProduct/OrderProduct'
import Button from '../Button'
import {NavLink} from 'react-router-dom'
import PaymentInfoDetails from '../PaymentInfoDetails/PaymentInfoDetails'

export default function PlaceOrder() {
    return (
        <div>
            <ShippingInfoDetails />
            <ShippingMethodInfo />
            <div className='payment-info'>
            <PaymentInfoDetails/>
            </div>
            <div className='order-product-border'>
                <OrderProduct />
            </div>
            <NavLink to='/orderConfirmation'>
                <div className="place-order">
                    <Button text="Place Order" className="place-order-button" />
                </div>
            </NavLink>
            <p className="policy">By clicking confirm order you agree to our<a href="/"> Terms and Conditions</a></p>
        </div>
    )
}
