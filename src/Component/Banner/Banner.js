import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';

export default function Banner() {
    return (
            <div className='aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 banner-content'>
                    <div className='aem-Grid aem-Grid--12 '>
                        <div className='aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--hide'>
                            <img src={require('../../images/chevron-left.svg').default} alt='left-arrow' aria-label='left-arrow' className='Banner-content-img' />
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--11 '>
                            <h1>Shop the new <br/>Signature Collection</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                            <NavLink to="/producthome"><Button className="btn_shop" text="SHOP NOW" /></NavLink>
                        </div>
                    </div>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 banner-image'>
                    <img src={require('../../images/banner-third.png')} alt='Banner' aria-label='Banner' />
                </div>
            </div>

    )
}
