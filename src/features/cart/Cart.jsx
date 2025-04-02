import { Link } from 'react-router-dom';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div>
      <Link to="/menu" className='text-sm text-blue-500 hover:text-blue-900 hover:underline'>&larr; Back to menu</Link>

      <h2>Your cart, %NAME%</h2>

      <div>
        <Link to="/order/new" className="bg-yellow-300 py-3 px-3 my-4 sm:px-6 sm:py-4 font-semibold uppercase inline-block  tracking-wide text-stone-900 rounded-full hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-400 disabled:cursor-not-allowed">Order pizzas</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
