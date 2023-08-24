import { Link } from "react-router-dom";

export default function CardComp(props) {
  // console.log(props.page);
  // console.log(props);
  console.log(props.cardArray);

  function handleClick(product) {
    props.setProductId(product.id);
    props.setProduct({
      title: product.title,
      image: product.image,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
      id: product.id,
    });
  }
  return props.cardArray.map((product) => {
    return (
      <div key={product.id}>
        <Link
          to={`/${props.page}/${product.id}`}
          // key={product.id}
          className="product-card-button-container"
          onClick={() => {
            handleClick(product);
          }}
        >
          <div className="product-card-container">
            <div className="card-title">{product.title}</div>
            <img className="card-image" src={product.image} alt="Product" />
            <div className="card-price">
              Price: ${(product.price * product.quantity).toFixed(2)}
            </div>
            <div className="card-description">{product.description}</div>
          </div>
        </Link>
        <button
          // key={product.id}
          onClick={() =>
            props.function(
              product.title,
              product.image,
              product.description,
              product.quantity,
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
