import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const plants = [
    { id: 1, name: "Snake Plant", price: 300, category: "Indoor", img: "/images/1.jpg" },
    { id: 2, name: "Aloe Vera", price: 250, category: "Indoor", img: "/images/2.jpg" },
    { id: 3, name: "Peace Lily", price: 400, category: "Indoor", img: "/images/3.jpg" },
    { id: 4, name: "Spider Plant", price: 200, category: "Indoor", img: "/images/4.jpg" },
    { id: 5, name: "Rubber Plant", price: 450, category: "Indoor", img: "/images/5.jpg" },
    { id: 6, name: "ZZ Plant", price: 350, category: "Indoor", img: "/images/6.jpg" },
  ];

  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <h2>Plants</h2>

      {plants.map(plant => {
        const isAdded = cartItems.some(item => item.id === plant.id);

        return (
          <div key={plant.id}>
            <img src={plant.img} width="100" />
            <h4>{plant.name}</h4>
            <p>₹{plant.price}</p>
            <button
              disabled={isAdded}
              onClick={() => dispatch(addItem(plant))}
            >
              {isAdded ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
