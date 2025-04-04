import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  // increase

  function increase(id) {
    dispatch(increaseItemQuantity(id));
  }

  function decrease(id) {
    dispatch(decreaseItemQuantity(id));
  }
  //

  return (
    <div className="space-x-3 text-semibold text-md">
      <Button type="round" onClick={() => decrease(pizzaId)}>
        -
      </Button>
      <span> {currentQuantity}</span>
      <Button type="round" onClick={() => increase(pizzaId)}>
        +
      </Button>
    </div>
  );
}
