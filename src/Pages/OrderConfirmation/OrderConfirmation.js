import React from 'react'
import ProductOrder from '../../Component/OrderProduct/OrderProduct'

export default function OrderConfirmation() {
    const info = JSON.parse(window.localStorage.getItem("formData"));
    const shippinginfo = JSON.parse(window.localStorage.getItem("shippingData"));
    return (
        <section className='aem-Grid aem-Grid--12 container order-container'>
            <div className='order-heading'>
                <h1>Order Successful!</h1>
                <div className='order-underbar'></div>
            </div>
            <div className='aem-Grid aem-Grid--12 order-content'>
                <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--8 aem-GridColumn--phone--12 order-content-data'>
                    <h4>Order Number #1700834</h4>
                    <div className='aem-Grid aem-Grid--12 order-confirmation-content'>
                        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 '>
                            <div className='aem-Grid aem-Grid--12 order-conf-content'>
                                <h5>Shipping Information</h5>
                                <p>{info.email}</p>
                                <p>{info.phoneNumber}</p>
                            </div>
                            <div className='aem-Grid aem-Grid--12'>
                                <p>{info.firstName} {info.lastName}</p>
                                <p>{info.address1} {info.address2}</p>
                                <p>{info.city} {info.zip}</p>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12'>
                            <div className='aem-Grid aem-Grid--12 order-conf-content'>
                                <h5>Shipping Method</h5>
                                <p>{shippinginfo}</p>
                            </div>
                            <div className='aem-Grid aem-Grid--12'>
                                <h5>Payment Information</h5>
                                <p>Credit Card</p>
                                <p>Visa ending in 4567</p>
                            </div>
                        </div>
                    </div>
                    <ProductOrder />
                    <h6 className='ship-info'>You will also receive an email with the details and we will let you know when your order has shipped.</h6>
                    <p className='support-content'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--hide social-media-offer-container'>
                    <div className='social-media-offer-content'>
                        <div className="offer-details">
                            <h2>Give us a follow <br />to SAVE 20% <br />on your next <h3>order.</h3></h2>
                        </div>
                        <div className="social-media">
                            <img src={require('../../images/instagram1.svg').default} alt="instagram" />
                            <img src={require('../../images/facebook1.svg').default} alt="facebook" />
                            <img src={require('../../images/twitter1.svg').default} alt="twitter" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
