import product from "./product";

function Price() {
  const formattedPrice = new Intl.NumberFormat("en-TN", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }).format(product.price);

  return <p className="price">{formattedPrice} TND</p>;
}

export default Price;
