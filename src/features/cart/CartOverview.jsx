import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(state => state.cart.cart.reduce((curr, item) => curr + item.quantity , 0)); 

  const totalPrice = useSelector(state => state.cart.cart.reduce((curr, item) => curr + item.totalPrice , 0));

  if(!totalCartQuantity) return null; 

  return (
    <div className="bg-stone-800 text-stone-200 uppercase p-4 sm:p-6 flex justify-between align-middle items-center">
      <p className="font-semibold text-sm text-stone-300 space-x-1 sm:space-x-2 md:text-base">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart"> Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
