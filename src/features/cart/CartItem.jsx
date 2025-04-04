import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem"

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className=" my-2 py-2 sm:flex sm:items-center sm:justify-between ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:space-x-3">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
      <DeleteItem action={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
