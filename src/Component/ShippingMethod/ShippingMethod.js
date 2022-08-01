import React, {useState} from 'react'
import ShippingInfoDetails from '../ShippingInfoDetails/ShippingInfoDetails'
import Button from '../Button'

export default function ShippingMethod() {
    const [shippingData, setShippingData] = useState();
    const Radiohandal = (e) => {
        e.preventDefault();
        alert("form save succesfully");
        window.localStorage.setItem("shippingData", JSON.stringify(shippingData));
        console.log(shippingData);
    }
    return (
        <div>
            <ShippingInfoDetails />
            <div>
            <p>{shippingData}</p>
            </div>
            <div className='shipping-method-content'>
                <h5>2. Shipping Method</h5>
                <form>
                    <div className="radio-button">
                        <input type="radio" name=" shippingType" value="Standard Shipping (4-8 business days via USPS) FREE" onChange={e => setShippingData(e.target.value)}/>
                        <label for="standard-shipping">Standard Shipping (4-8 business days via USPS) FREE</label>
                    </div>
                    <div className="radio-button">
                        <input type="radio" name=" shippingType" id="express-delivery" value="Express Delivery (2-5 business days via USPS) $17.95" onChange={e => setShippingData(e.target.value)}/>
                        <label for="express-delivery">Express Delivery (2-5 business days via USPS) $17.95</label>
                    </div>
                    <div className="radio-button">
                        <input type="radio" name=" shippingType" id="next-day-delivery" value="Next Day Delivery (Next business days via FedEx) $53.61" onChange={e => setShippingData(e.target.value)}/>
                        <label for="next-day-delivery">Next Day Delivery (Next business days via FedEx) $53.61</label>
                    </div>
                    <div className='payment-proceed'>
                        <Button text="CONTINUE TO PAYMENT" className="payment-button" onClick={Radiohandal}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
