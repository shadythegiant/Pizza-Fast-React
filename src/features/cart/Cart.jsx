import { Link } from 'react-router-dom';
import CartItem from "./CartItem"
import { useSelector } from 'react-redux';

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const cart = useSelector(state => state.cart.cart)
  const username = useSelector(state => state.user.username);

  return (
    <div className='py-3 px-4'>
      <Link to="/menu" className='text-sm text-blue-500 hover:text-blue-900 hover:underline'>&larr; Back to menu</Link>

      <h2 className='mt-7 font-semibold text-xl'>Your cart, {username}</h2>

      <ul className='divide-y divide-stone-300 border-b my-3'>
       {cart.map(item  => <CartItem item={item} key={item.key} /> )}
      </ul>

      <div className='space-x-2'>
        <Link to="/order/new" className="bg-yellow-500 py-2 px-2 my-4 sm:px-3 sm:py-2 font-semibold uppercase inline-block  tracking-wide text-stone-900 rounded-full hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-400 disabled:cursor-not-allowed">Order pizzas</Link>
        <button className=" border border-stone-300 py-2 px-2 my-4 sm:px-3 sm:py-2 font-semibold uppercase inline-block  tracking-wide text-stone-900 rounded-full hover:bg-stone-400 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-400 disabled:cursor-not-allowed">Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
