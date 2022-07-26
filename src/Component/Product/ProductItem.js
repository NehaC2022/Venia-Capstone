import React ,{useState}from 'react';
import { useDispatch } from 'react-redux';
import ProductDescription from './ProductDescription';
import Rating from './Rating';
import { handleAction } from '../../redux/cartSlice';
import SimpleImageSlider from "react-simple-image-slider";

export default function ProductItem({ title, price, img, description, product,rating }) {
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(handleAction.addItem({ ...product }))
        console.log(product);
    }
    let [num, setNum]= useState(0);
    let incNum =()=>{
      if(num<10)
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }
    const images = [
        { url: img },
        { url: img },
        { url: img },
        { url: img },
        { url: img }
    
      ];
    return (
        <div>
            <div className='aem-Grid aem-Grid--12 product-container'>
                <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 aem-GridColumn--tablet--6'>
                    <div className='aem-Grid aem-Grid--12 product-item' >
                        <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide aem-GridColumn--tablet--hide mini-image'>
                            <figure>
                                <img src={img} alt='ProductImage' aria-label='product-icon'/>
                                <img src={img} alt='ProductImage' aria-label='product-icon'/>
                                <img src={img} alt='ProductImage' aria-label='product-icon'/>
                                <img src={img} alt='ProductImage' aria-label='product-icon'/>
                                <img src={img} alt='ProductImage' aria-label='product-icon'/>
                            </figure>
                        </div>
                        {/* <div className='aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 large-image'>
                            <figure>
                                <img src={img} alt='ProductImage' aria-label='product-icon'/>
                            </figure>
                        </div> */}
                        <div className='aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 large-image'>
                        <SimpleImageSlider
                            width={400}
                            height={550}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                          />
                        </div>
                    </div>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 product-details'>
                    <h6>Clothing / Women’s / Outerwear</h6>
                    <h1>{title}</h1>
                    <h4>${price}</h4>
                    {/* <div>
                        <img src={require("../../images/star.svg").default} alt="StarImage" aria-label='star-icon'/>
                        <img src={require("../../images/star.svg").default} alt="StarImage" aria-label='star-icon'/>
                        <img src={require("../../images/star.svg").default} alt="StarImage" aria-label='star-icon'/>
                        <img src={require("../../images/star.svg").default} alt="StarImage" aria-label='star-icon'/>
                        <img src={require("../../images/star.svg").default} alt="StarImage" aria-label='star-icon'/>
                    </div> */}
                    {/* <Rating rating={rating}/> */}
                    <ProductDescription description={description}/>
                    <div className='product-btn'>
                        <h5>Quantity</h5>
                        <div className='cart-btn'>
                            <button aria-label='decrement-button' onClick={decNum}>-</button>
                            <input type="text" value={num} onChange={handleChange}/>
                            <button aria-label='decrement-button' onClick={incNum}>+</button>
                        </div>
                    </div>
                    <button className='cart' onClick={() => addProduct(product)}>ADD TO CART</button>
                    <div className='social-icon'>
                        <img src={require("../../images/heart.svg").default} alt="HeartImage" aria-label='HeartIcon'/>
                        <p>Save</p>
                        <img src={require("../../images/share.svg").default} alt="ShareImage" aria-label='shareIcon'/>
                        <p>Share</p>
                    </div>
                </div>
            </div>
            <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 product-description'>
                <h1>{title}</h1>
                <h3>Description</h3>
                <p>{description}</p>
                <div className='product-bar'></div>
            </div>
        </div>
    )
}
