import { Link } from "react-router-dom";

export default function CardComp(props) {
  console.log(props.page);
  console.log(props);
  return props.cardArray.map((product) => {
    // console.log("PRODUCT: ", product);
    return (
      <div>
        <Link
          to={`/${props.page}/${product.id}`}
          key={product.id}
          className="product-card-button-container"
          onClick={() => props.setProductId(product.id)}
        >
          <div className="product-card-container">
            <div className="card-title">{product.title}</div>
            <img className="card-image" src={product.image} alt="Product" />
            <div className="card-price">
              Price: ${(product.price * props.number).toFixed(2)}
            </div>
            <div className="card-description">{product.description}</div>
          </div>
        </Link>
        <button
          onClick={() =>
            props.function(
              product.title,
              product.image,
              product.description,
              product.price,
              product.id
            )
          }
        >
          {props.buttonName}
        </button>
      </div>
    );
  });
}
