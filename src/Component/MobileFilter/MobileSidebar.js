import React from "react";
import { filterCategories } from "../../Data/Data";
import Button from "../Button";
import closeIcon from '../../images/x.svg';
const MobileSidebar = (onClose, handleChange) => {
    const closeSideBar = () => {
        onClose();
    }
    return (<>
        <aside className="mobilefilter-menu container">
            <nav>
                <ul>
                    <li>Filters</li>
                    <li onClick={closeSideBar}><img src={closeIcon} alt="close_icon" /></li>
                </ul>

            </nav>
            <div className="attribute">
                <a href=" ">Clear all</a>
            </div>
            <div className="filter-container">
                <div className="attribute">
                    <h6>Categories</h6>
                    {
                        filterCategories.map((val) => {
                            return (
                                <div className="checkbox">
                                    <input type="checkbox"
                                        id={val.id}
                                        name={val.name}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor={val.id} className="checkbox">{val.label}</label>
                                </div>);
                        })
                    }
                    <div className="checkbox">
                        <a href="result-btn ">Show More</a>
                    </div>

                </div>
                <div >
                    <Button className="result-btn " text="SEE 17 RESULTS" />

                </div>

            </div>

        </aside>
    </>)
}
export default MobileSidebar;







