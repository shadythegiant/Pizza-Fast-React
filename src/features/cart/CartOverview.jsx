import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 text-stone-200 uppercase p-4 sm:p-6 flex justify-between align-middle items-center">
      <p className="font-semibold text-sm text-stone-300 space-x-1 sm:space-x-2 md:text-base">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart"> Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
