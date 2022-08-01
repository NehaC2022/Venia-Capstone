import React from 'react'
import { useSelector} from 'react-redux/es/exports';

export default function OrderProduct() {
    const cartData = useSelector((value) =>
        value.cart.item
    );
    // const count= items.quantity;
    return (
            <div className='aem-Grid aem-Grid--12 product-summary'>
                <h5>3 items in your order</h5>
                {cartData.map((value) => {
                    return (
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 product-summary-content">
                            <div className='aem-Grid aem-Grid--12 cart-product'>
                                <div className='aem-GridColumn aem-GridColumn--default--6'>
                                    <img src={value.image} alt='Product' aria-label="productImage" />
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--6'>
                                    <h6>{value.title}</h6>
                                    <p>Size : Medium</p>
                                    <p>Color : Storm</p>
                                    <p>Quantity: {value.quantity}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}
