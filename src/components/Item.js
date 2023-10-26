import React, {useState} from "react";

function Item({ name, category }) {
  const [isIncart, setIsIncart] = useState(false);
  const toggleInCart = () => {
    setIsIncart(!isIncart);
  }
  console.log(isIncart);
  console.log(toggleInCart);
  return (
    <li className={isIncart? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleInCart}>{isIncart? "Remove From Cart": "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
