import { useState, useEffect } from "react";
import CardComp from "../CardComp";
export default function CartPage(props) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    for (let i = 0; i < props.cartArray.length; i++) {
      console.log("ran cart");
      setCards((preState) => [...preState, props.cartArray[i]]);
    }
  }, [props.cartArray]);

  function deleteCard(title, image, description, price, id) {
    console.log(props.number);
    if (props.number === 1) {
      setCards([]);
      props.setCartArray((preState) =>
        preState.filter((item) => {
          return item.title !== title;
        })
      );
    } else {
      props.subtractNumber(id);
    }
  }

  return (
    <div className="page-container">
      <div className="form-container">
        <h3>Cart Page</h3>
        <div className="main-product-card-container">
          <CardComp
            cardArray={cards}
            page={"cart"}
            function={deleteCard}
            buttonName={"Delete"}
            setProductId={props.setProductId}
            number={props.number}
          />
        </div>
      </div>
    </div>
  );
}
