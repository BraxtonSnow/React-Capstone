import { useEffect, useState } from "react";

export default function Product(props) {
  const [product, setProduct] = useState([]);
  console.log("props: ", props);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${parseInt(props.productId)}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error(error));
  }, [props.productId]);

  return (
    <div className="page-container">
      <div className="product-page-content">
        {/* <div>{product.id}</div> */}
        <div>{product.title}</div>
        <img src={product.image} alt={product.id} />
        <div>{product.description}</div>
        <div>{product.category}</div>
        <div>${(product.price * props.number).toFixed(2)}</div>
        <div className="card-quantity-container">
          {"Quantity:   "}
          <button onClick={() => props.subtractNumber()}>-</button>
          <button>{props.number}</button>
          <button onClick={() => props.addNumber()}>+</button>
        </div>
      </div>
    </div>
  );
}
// .toFixed(2)
