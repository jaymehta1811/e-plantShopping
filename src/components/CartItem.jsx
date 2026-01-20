import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div key={item.id}>
          <img src={item.img} width="80" />
          <h4>{item.name}</h4>
          <p>Unit Price: ₹{item.price}</p>

          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, type: "decrement" }))
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, type: "increment" }))
            }
          >
            +
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total Amount: ₹{calculateTotalAmount()}</h3>

      <button>Checkout (Coming Soon)</button>

      <br /><br />

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartItem;
