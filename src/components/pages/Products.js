import { useState /*useEffect*/ } from "react";
import CardComp from "../CardComp";

export default function ProductsPage(props) {
  const number = 1;
  // const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedItem, setSearchedItem] = useState("");

  // useEffect(() => {
  //   setProducts([]);
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       data.forEach((item) => {
  //         item["quantity"] = 1;
  //       });
  //       setProducts(data);
  //       // console.log(data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  function searchBar(e) {
    e.preventDefault();
    // console.log(search);
    props.setProducts((preState) =>
      preState.filter((item) => {
        // console.log(item.title);
        return item.title === search;
      })
    );
    setSearch("");
    setSearchedItem("work");
    console.log(searchedItem);
    // console.log(products);
  }

  function cardSelectToCart(
    title,
    image,
    description,
    quantity,
    price,
    created,
    id
  ) {
    // console.log(props.number);
    if (created === false) {
      props.setNumber((preState) => preState + 1);
      // props.cartArray["created"] = true;

      props.cartArray.forEach((item) => {
        console.log(item);
        if (item.id === id) {
          item["created"] = true;
          console.log("item", item);
        }
      });

      props.setCartArray((preState) => [
        ...preState,
        {
          title: title,
          image: image,
          description: description,
          quantity: 1,
          price: price,
          created: true,
          id: id,
        },
      ]);
    } else {
      console.log("number", props.number);
      console.log("quantity", quantity);
      props.addNumber(id, quantity);
    }

    // console.log("worked well");
  }

  return (
    <div className="page-container">
      <div className="form-container">
        <h3>Products Page</h3>
        <form onSubmit={(e) => searchBar(e)} className="form-input-content">
          <input
            className="input-search-box"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input className="input-submit-button" type="submit" />
        </form>
        <div className="main-product-card-container">
          <CardComp
            cardArray={props.products}
            function={cardSelectToCart}
            page={"products"}
            buttonName={"Add To Cart"}
            setProductId={props.setProductId}
            number={number}
            setProduct={props.setProduct}
          />
        </div>
      </div>
    </div>
  );
}
