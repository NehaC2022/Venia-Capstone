// import React from 'react'
// import { useState, useEffect } from 'react';
// import Button from "../Button";
// import closeIcon from "../../Images/x.svg"
// const MobileSideBar = ({ onClose }) => {
//     const closeSideBar = () => {
//         onClose();
//     }
//     const [data, setData] = useState([]);
//     const [isSelected, setisSelected] = useState(false);
//     const getCategoryData = () => {
//         fetch("https://fakestoreapi.com/products/categories")
//             .then(res => {
//                 return res.json()
//             })
//             .then(data => {
//                 setData(data);

//             })
//         console.log(data)
//     }

//     useEffect(() => {
//         getCategoryData()
//     }, []);
//     return (<>
//         <aside className="mobilefilter_menu container" >
//             <nav>
//                 <ul>
//                     <li>Filters</li>
//                     <li onClick={closeSideBar}><img src={closeIcon} alt="close_icon" /></li>
//                 </ul>
//             </nav>
//             <a>Clear all</a>
//             <p>Categories</p>
//             {data.map((category) => {
//                 return (
//                     <>
//                         <div className='Attribute-first' >
//                             <input type="checkbox" id='chk1-label' aria-label="checkbox" onClick={() => {
//                                 setisSelected(!isSelected);
//                                 filterProduct({ category })
//                             }} />
//                             <label htmlFor="chk1-label">{category}</label><br />

//                         </div>
//                     </>
//                 )
//             })}
//             <div className="allresult_box">
//                 <Button className="btn_lab all_result" text="SEE 137 RESULTS " />
//             </div>
//         </aside>
//     </>)
// }
// export default MobileSideBar;

import {filterCategories} from "../../Data";
import Button from "../Button";
// import closeIcon from "../../Images/x.svg"
const MobileSidebar=({handleChange,categories})=>{
   const closeSideBar=()=>{
    onClose();
   }
    return(<>
             <aside className="mobilefilter_menu container">
            <nav>
                <ul>
                    <li>Filters</li>
                    <li onClick={closeSideBar}><img src={require('../../images/x.svg')} alt="close_icon"/></li>
                </ul>
   
               
            </nav>
                <div className="attribute">
                    <a href=" ">Clear all</a>
                </div>
         
    <div className="filter_container">
   
    <div className="attribute border_none">  
        <h6>Categories</h6>
        {
            filterCategories.map((val)=>{
                let cat= val.name;
                return(<div className="checkbox"> 
                            <input type="checkbox"
                            id={val.id}
                            name={val.name}
                            onChange={handleChange}
                            checked={categories}
                            /> 
                            <label htmlFor={val.id} className="checkbox">{val.label}</label>
                        </div>);
            })
        }
        <div className="checkbox"> 
            <a href=" ">Show More</a>
        </div>
      
    </div>
    <div className="action">
        <Button className="btn_lab" text="SEE 17 RESULTS"/>

        </div>

</div>
             
            </aside>
    </>)
}
export default MobileSidebar;







