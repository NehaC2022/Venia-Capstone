import React from 'react'
import { useSelector } from 'react-redux/es/exports';
import { Link, NavLink } from 'react-router-dom';
import { NavList } from '../../Data/Data';

export default function Navbar() {
    const cartCounter = useSelector((value)=>{
        return value.cart.item
      });
      const totalCartItem = cartCounter.length;
    return (
        <div className='navbar'>
            <nav className='aem-Grid aem-Grid--12 container'>
                <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--2 aem-GridColumn--phone--6 logo">
                    <Link to="#" >
                        <img src={require('../../images/align-justify.svg').default} alt='hamberger' aria-label='hamberger' className="mobile-menu" />
                    </Link>
                    <NavLink exact to="/" className='desktopLogo'>
                        <img src={require('../../images/venia-logo.png')} alt='Logo' className='desktop-logo' aria-label='desktop-logo' />
                    </NavLink>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--9 menu">
                    <ul>
                        {NavList.map((val) => {
                            return (
                                // <>
                                //     <li className='active'>{val.menu1}</li>
                                //     <li>{val.menu2}</li>
                                //     <li>{val.menu3}</li>
                                //     <li>{val.menu4}</li>
                                //     <li>{val.menu5}</li>
                                // </>

                                // <li key={val.id}><span>{val.menu}</span></li>
                                <li key={val.id}><NavLink to=" " className='text-decoration'><span>{val.menu}</span></NavLink></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--tablet--1 aem-GridColumn--phone--6 icon">
                    <NavLink exact to="/cart" className="cart-icon">
                        <img src={require('../../images/shopping-bag.svg').default} alt="Shopping Bag" aria-label='shoppingBag-icon' /><span>{totalCartItem}</span>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

