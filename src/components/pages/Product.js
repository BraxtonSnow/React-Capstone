import { useEffect, useState } from "react";

export default function Product(props) {
  const [product, setProduct] = useState([]);
  console.log("props: ", props);
  useEffect(() => {
    console.log("i ran properely");
    fetch(`https://fakestoreapi.com/products/${parseInt(props.productId)}`)
      .then((res) => res.json())
      .then((data) => {
        data["quantity"] = props.product.quantity;
        console.log(data);
        setProduct(data);
      })
      .catch((error) => console.error(error));
  }, [props.product.quantity, props.productId]);

  // console.log(product);

  return (
    <div className="page-container">
      <div className="product-page-content">
        <div>{product.title}</div>
        <img src={product.image} alt={product.id} />
        <div>{product.description}</div>
        <div>{product.category}</div>
        <div>${(product.price * product.quantity).toFixed(2)}</div>
        <div
          style={{ display: props.display }}
          className="card-quantity-container"
        >
          {"Quantity:   "}
          <button
            onClick={() => props.subtractNumber(product.id, product.quantity)}
          >
            -
          </button>
          <button>{product.quantity}</button>
          <button onClick={() => props.addNumber(product.id, product.quantity)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
// .toFixed(2)
