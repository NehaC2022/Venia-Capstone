import React from "react";

function FooterItemList() {
    return (
        <div className="aem-Grid aem-Grid--12 aem-Grid--phone--12 aem-Grid--tablet--12 container upperFooter">
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                <h6>Account</h6>
                <ul>
                    <li><a href=" ">Sign In</a></li>
                    <li><a href=" ">Register</a></li>
                    <li><a href=" ">Order Status</a></li>
                </ul>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                <h6>About Us</h6>
                <ul>
                    <li><a href=" ">Our Story</a></li>
                    <li><a href=" ">Careers</a></li>
                </ul>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                <h6>Help</h6>
                <ul>
                    <li><a href=" ">Contact Us</a></li>
                    <li><a href=" ">Order Status</a></li>
                    <li><a href=" ">Returs</a></li>
                </ul>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                <h6>Follow Us!</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <ul>
                    <li>
                        <a href=" "><img src={require('../../../images/instagram.svg').default} alt='mySvgImage' /></a>
                        <a href=" "><img src={require('../../../images/facebook.svg').default} alt='mySvgImage' /></a>
                        <a href=" "><img src={require('../../../images/twitter.svg').default} alt='mySvgImage' /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterItemList;