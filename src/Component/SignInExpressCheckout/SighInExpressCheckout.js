import React from 'react'
import Button from '../Button'

export default function SighInExpressCheckout() {
  return (
    <div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--tablet--12 aem-GridColumn--phone--hide signIn_container">
      <div className='aem-Grid aem-Grid--12'>
        <div className="aem-GridColumn aem-GridColumn--default--6">
          <h6>Sign in for Express Checkout</h6>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--6">
          <Button text="SIGN IN" className="signIn_button" type="button" />
        </div>
      </div>
    </div>
  )
}
