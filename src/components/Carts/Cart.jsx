import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import "./Cart.css";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [tax,setTax]=useState(0);
  const [grandTotal,setGrandTotal]=useState(0);

  const handleId = (product) => {
    const newCart = [...cart, product];
    const newPrice = product.price;
    setCart(newCart);
    setPrice((prevPrice) => prevPrice + newPrice);
    const shipping = newPrice / 5;
    setShipping((prevShipping) => prevShipping + shipping);
    const tax=newPrice/10;
    setTax(prevTax=>prevTax+tax);
    const grandTotal=newPrice+shipping+tax;
    setGrandTotal(prevGrand=>prevGrand+grandTotal);
  };

  useEffect(() => {
    fetch(`fakeData/products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-con">
      <div className="product-con">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleId={handleId}
          ></Product>
        ))}
      </div>
      <div className="summery">
        <h3 className="order-summery">Order Summary</h3>
        <div className="sum-info">
          <div>
            <h3>Selected Items:</h3>
            <h3>Total Price:</h3>
            <h3>Total Shipping Charge:</h3>
            <h3>Tax:</h3>
            <h3>Grand Total:</h3>
          </div>
          <div>
            <h3>{cart.length}</h3>
            <h3>${price.toFixed(2)}</h3>
            <h3>${shipping.toFixed(2)}</h3>
            <h3>${tax.toFixed(2)}</h3>
            <h3>${grandTotal.toFixed(2)}</h3>
          </div>
        </div>
        <div className="summery-btn">
          <button>Clear Cart</button>
          <button>Review Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
