import React, { useEffect } from "react";
import { handleAction } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const PricingSummary = () => {
    const productCart = useSelector((state) => state.cart.cartTotalAmount);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(handleAction.getTotals());
    }, [productCart, dispatch]);

    return (
        <div className='aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--tablet--12 aem-GridColumn--phone--12 price-calculation'>
            <h5>Pricing Summary</h5>
            <div className='aem-Grid aem-Grid--12'>
                <p>Subtotal<span>${productCart}</span></p>
                <p>Coupon<span>- $ 77.60</span></p>
                <p>Gift Card<span>- $ 100.00</span></p>
                <p>Estimated tax<span>$ 23.28</span></p>
                <p>Estimated shipping<span>FREE</span></p>
                <h6>Estimated Total<span>$ {productCart}</span></h6>
            </div>
        </div>
    );
}
export default PricingSummary;