import React, {useState} from 'react'
import ShippingInfoDetails from '../ShippingInfoDetails/ShippingInfoDetails'
import ShippingMethodInfo from '../ShippingMethodInfo/ShippingMethodInfo'
import Button from '../Button'

export default function PaymentInfo({paymentAccor}) {
  const [paymentData, setPaymentData] = useState({
    paymentway: " ",
    nameoncard: " ",
    cardnumber: " ",
    expDate: " ",
    cvv: " ",
});
const paymentinputData = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setPaymentData({ ...paymentData, [name]: value });
}
const submitAction = (e) => {
  e.preventDefault();
  window.localStorage.setItem("paymentData", JSON.stringify(paymentData));
  paymentAccor();
  setPaymentData({
    paymentway: " ",
    nameoncard: " ",
    cardnumber: " ",
    expDate: " ",
    cvv: " ",
  })
  console.log(paymentData);
}
  return (
    <div>
      <ShippingInfoDetails />
      <ShippingMethodInfo />
      <div className='payment-content'>
        <h5>3. Payment Information</h5>
        <form>
          <div className="radio-button">
            <input type="radio" name="paymentway" id="credit-card" value={paymentData.paymentway} onChange={paymentinputData} />
            <label htmlFor="creditcard">Credit Card</label>
          </div>
          <div className='aem-Grid aem-Grid--12'>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 ">
              <label htmlFor="nameoncard">Name on Card</label><br />
              <input type="text" id="nameoncard" name="nameoncard" value={paymentData.nameoncard} onChange={paymentinputData}/>
            </div>
          </div>
          <div className='aem-Grid aem-Grid--12'>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 ">
              <label htmlFor="cardnumber">Credit Card Number</label><br />
              <input type="text" id="cardnumber" name="cardnumber" value={paymentData.cardnumber} onChange={paymentinputData}/>
            </div>
          </div>
          <div className='aem-Grid aem-Grid--12'>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 ">
              <div className='aem-Grid aem-Grid--12'>
                <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 " style={{paddingRight : "24px"}}>
                  <label htmlFor="expDate">Expiration Date</label><br />
                  <input type="text" id="expDate" name="expDate" value={paymentData.expDate} onChange={paymentinputData}/>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 "style={{width : "110px"}}>
                  <label htmlFor="cvv">CVV</label><br />
                  <input type="text" id="cvv" name="cvv" value={paymentData.cvv} onChange={paymentinputData}/>
                </div>
                <img src ={require('../../images/help-circle.svg').default} alt='Help' style={{margin : "32px 0px 0px 7px"}}/>
              </div>
            </div>
          </div>
          <div className="radio-button" style={{paddingTop : "0px"}}>
            <input type="checkbox" id="sameAddress" name="Billing address SA shipping address" value="Billing address same as shipping address"/>
            <label htmlFor="sameAddress">Billing address same as shipping address</label>
          </div>
          <div className="radio-button paypal-button">
            <input type="radio" name="paymentway" id="payPal" value={paymentData.paymentway} onChange={paymentinputData}/>
            <label htmlFor="payPal">PayPal</label>
          </div>
          <div className='payment-proceed'>
            <Button text="CONTINUE TO PAYMENT" className="payment-button"onClick={submitAction}/>
          </div>
        </form>
      </div>
    </div>
  )
}
