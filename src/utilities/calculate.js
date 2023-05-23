const add = (first, second) => {
  const sum = first + second;
  return sum;
};

const multiply = (value) => {
  const multiply = value * 2;
  return multiply;
};

const getTotalPrice = (product) => {
  let initialValue = 0;
  const reducer = (previous, current) => previous + current.price;
  const total = product.reduce(reducer, initialValue);
  return total;
};

export { add, multiply, getTotalPrice as getTotal };
