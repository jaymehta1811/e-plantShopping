import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Snake Plant", price: 300, category: "Indoor", img: "/images/1.jpg" },
  { id: 2, name: "Aloe Vera", price: 250, category: "Indoor", img: "/images/2.jpg" },
  { id: 3, name: "Peace Lily", price: 400, category: "Indoor", img: "/images/3.jpg" },
  { id: 4, name: "Spider Plant", price: 200, category: "Indoor", img: "/images/4.jpg" },
  { id: 5, name: "Rubber Plant", price: 450, category: "Indoor", img: "/images/5.jpg" },
  { id: 6, name: "ZZ Plant", price: 350, category: "Indoor", img: "/images/6.jpg" },

  { id: 7, name: "Rose", price: 150, category: "Outdoor", img: "/images/7.jpg" },
  { id: 8, name: "Jasmine", price: 180, category: "Outdoor", img: "/images/8.jpg" },
  { id: 9, name: "Hibiscus", price: 220, category: "Outdoor", img: "/images/9.jpg" },
  { id: 10, name: "Tulsi", price: 100, category: "Outdoor", img: "/images/10.jpg" },
  { id: 11, name: "Money Plant", price: 200, category: "Outdoor", img: "/images/11.jpg" },
  { id: 12, name: "Bougainvillea", price: 300, category: "Outdoor", img: "/images/12.jpg" },

  { id: 13, name: "Cactus", price: 120, category: "Succulent", img: "/images/13.jpg" },
  { id: 14, name: "Echeveria", price: 180, category: "Succulent", img: "/images/14.jpg" },
  { id: 15, name: "Haworthia", price: 200, category: "Succulent", img: "/images/15.jpg" },
  { id: 16, name: "Sedum", price: 160, category: "Succulent", img: "/images/16.jpg" },
  { id: 17, name: "Crassula", price: 190, category: "Succulent", img: "/images/17.jpg" },
  { id: 18, name: "Agave", price: 260, category: "Succulent", img: "/images/18.jpg" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  return (
    <>
      <nav style={{ padding: "10px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      {["Indoor", "Outdoor", "Succulent"].map(category => (
        <div key={category}>
          <h2>{category} Plants</h2>
          {plants
            .filter(p => p.category === category)
            .map(plant => (
              <div key={plant.id}>
                <img src={plant.img} width="100" />
                <h4>{plant.name}</h4>
                <p>₹{plant.price}</p>
                <button
                  disabled={cartItems.some(i => i.id === plant.id)}
                  onClick={() => dispatch(addItem(plant))}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      ))}
    </>
  );
};

export default ProductList;
