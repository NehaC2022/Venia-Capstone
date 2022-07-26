import React from 'react';
import Filter from './Filter';

export default function ProductFilter() {
    return (
        <div className='filter-content'>
            <h5>Clothing / Women’s / Outerwear</h5>
            <div className='filter-icon'>
                <p> <img src={require('../../images/sliders.svg').default} alt='slider' />Filter Results</p>
                <p> <img src={require('../../images/arrow-up.svg').default} alt='up-arrow' /> <img src={require('../../images/arrow-down.svg').default} alt='down-arrow' />Sort Products</p>
            </div>
            <Filter />
        </div>
    )
}
