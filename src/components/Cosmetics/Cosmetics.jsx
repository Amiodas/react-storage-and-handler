import { useEffect, useState } from "react";
import { add, getTotal, multiply } from "../../utilities/calculate";
import "./Cosmetics.css";
import { addToDb, removeFromDb } from "../../utilities/fakedb";
const Cosmetics = () => {
  const first = 220;
  const second = 120;
  const total = add(first, second);
  const grandTotal = multiply(total);

  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setCosmetics(data));
  }, []);

  const handleAddToCart = (id) => {
    addToDb(id);
  };
  const handleRemoveFromCart = (id) => {
    removeFromDb(id);
  };
  const totalCost = getTotal(cosmetics);

  return (
    <div>
      <h2>I am from cosmetics</h2>
      <p>Total Cosmetics Price: {totalCost}</p>
      <p>Grand Total: {grandTotal}</p>
      <div className="cosmetics-container">
        {cosmetics.map((cosmetic) => (
          <div key={cosmetic.id} className="cosmetic">
            <h4>Product Name: {cosmetic.name}</h4>
            <p>Product Price: {cosmetic.price} /-</p>
            <h4>Product Id: {cosmetic.id}</h4>
            <button onClick={() => handleAddToCart(cosmetic.id)}>
              Add to cart
            </button>
            <button onClick={() => handleRemoveFromCart(cosmetic.id)}>
              Remove cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cosmetics;
