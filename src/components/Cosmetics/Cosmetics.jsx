import { add, multiply } from "../../utilities/calculate";
import "./Cosmetics.css";
const Cosmetics = () => {
  const first = 220;
  const second = 120;
  const total = add(first, second);
  const grandTotal = multiply(total);

  const cosmetics = [
    {
      id: "646c80f357c820bbc8084a37",
      price: 2098,
      name: "Shawna Patel",
    },
    {
      id: "646c80f34c015fa42088d727",
      price: 3094,
      name: "Munoz Herman",
    },
    {
      id: "646c80f35e9e59c330965c39",
      price: 547,
      name: "Marquita Jefferson",
    },
    {
      id: "646c80f3ced9e087af594c35",
      price: 2378,
      name: "Ware Lang",
    },
    {
      id: "646c80f34d1109b16ca2a220",
      price: 3499,
      name: "Watts Lee",
    },
    {
      id: "646c80f3332343a4e0d99c09",
      price: 2775,
      name: "Tasha Cline",
    },
    {
      id: "646c80f37ef19242546355d1",
      price: 2326,
      name: "Grimes Henry",
    },
  ];

  return (
    <div>
      <h2>I am from cosmetics</h2>
      <p>Cosmetics Price: {total}</p>
      <p>Grand Total: {grandTotal}</p>
      <div className="cosmetics-container">
        {cosmetics.map((cosmetic) => (
          <div key={cosmetic.id} className="cosmetic">
            <h4>Product Name: {cosmetic.name}</h4>
            <p>Product Price: {cosmetic.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cosmetics;
