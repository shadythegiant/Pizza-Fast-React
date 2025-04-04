import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { getCurrenQuantity } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrenQuantity(pizzaId));

  return (
    <li className=" my-2 py-2 sm:flex sm:items-center sm:justify-between ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:space-x-3">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>

        {/* buttons  */}
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem action={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
