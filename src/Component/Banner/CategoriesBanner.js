import React from 'react'
import { Categories } from '../../Data/Data'

export default function CategoriesBanner() {
    return (
        <div className='aem-Grid aem-Grid--12 container categories'>
            {
                Categories.map((value)=>{
                    return(
                        <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 categories-data'>
                            <div className='category-img'>
                                <img src={value.img} alt={value.alt} aria-label={value.alt} />
                            </div>
                            <div className='category-info'>
                                <h6>{value.heading}</h6>
                                <p>{value.subinfo}</p>
                            </div>
                        </div>
                    )
                }
            )
        }
                    </div>
    )
}
