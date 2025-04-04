import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button"
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  // handle events 

  function handleAddItem() {
    const newItem = {
      pizzaId : id, 
      name, 
      quantity : 1, 
      unitPrice, 
      totalPrice : unitPrice * 1,
    }

    dispatch(addItem(newItem))

  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opcaity-70 grayscale' : ''}`} />
      <div className="flex flex-col flex-grow pt-0.5">
        <p className="font-medium ">{name}</p>
        <p className="text-sm italic text-stone-500">{ingredients.join(", ")}</p>
        <div className="my-auto flex justify-between items-center">
         
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-semibold">Sold out</p>}
          {!soldOut && <Button type='small' onClick={handleAddItem}>Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
