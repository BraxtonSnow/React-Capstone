import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <NavLink exact to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/products">
        <button>Products</button>
      </NavLink>
      <NavLink to="/cart">
        <button>Cart</button>
      </NavLink>
      <NavLink to="/contact">
        <button>Contact</button>
      </NavLink>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
    </div>
  );
}
