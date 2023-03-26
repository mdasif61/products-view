import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props)
    const {id,name,price,img,ratings,seller}=props.product;
    return (
        <div className='shop-cont'>
            <div className='imgDiv'>
                <img src={img} alt=""/>
            </div>
            <div>
            <h6 className='name'>{name}</h6>
            </div>
            <div className='product-info'>
                <h4 className='price'>Price: ${price}</h4>
                <p className='brand'>Brand : <span style={{fontWeight:"bold",fontSize:"18px"}}>{seller}</span></p>
            </div>
            <div className='btnDiv'>
                <button onClick={()=>props.handleId(props.product)} className='addBtn'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;