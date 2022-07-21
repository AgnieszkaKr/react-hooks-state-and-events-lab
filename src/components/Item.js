import React, {useState} from "react";

function Item({ name, category }) {
const [addCart, setAddCart] = useState(false)
const addToCart=()=>{
  console.log(addCart)
  setAddCart(addCart => !addCart)
  
}
let className = addCart ? "in-cart":""
  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{addCart? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
