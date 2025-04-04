import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='flex flex-col  items-center flex-wrap gap-10'>
      <Link to="/menu">&larr; Back to menu</Link>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
